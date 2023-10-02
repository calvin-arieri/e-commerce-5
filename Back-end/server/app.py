from flask import Flask , request,make_response,jsonify,session
from flask_sqlalchemy import SQLAlchemy
from flask_migrate import Migrate
from models import db, Shopping,Product,User,Order,Comment
from flask_cors import CORS
import statistics
import jwt
from werkzeug.exceptions import NotFound
import datetime
from functools import wraps
app = Flask(__name__)
CORS(app)
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///shop.db'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
app.config['SECRET_KEY'] = 'A\xd0\xe3\x9b\xef\x90\xb7\x15\x82\xd6\x99\xe6'
migrate = Migrate(app , db)
db.init_app(app)
def token_required(f):
    @wraps(f)
    def decorated(*args, **kwargs):
        token = request.args.get('token')
        if not token:
            return jsonify({"message": "Token is missing"})
        try:
            data = jwt.decode(token,app.config['SECRET_KEY'])
        except:
            return jsonify({"message": "token is missing or invalid"}),406
        return f(*args, **kwargs)
    return decorated    
@app.route('/')
def home():
    return 'E-shop data API'

@app.route("/login", methods=["POST"])
def login():
    data = request.get_json()
    email = data["email"]
    password = data["password"]

    user = User.query.filter_by(email=email).first()

    if user and user.password == password:
        token = jwt.encode({
            'user': data['email'],
            'exp': str(datetime.datetime.utcnow() + datetime.timedelta(hours=2))
        }, app.config['SECRET_KEY'])
        session['user_id'] = user.id
        session['role'] = user.role
        return jsonify({
            "token": token,
            "user":User.query.filter_by(email=email).first().to_dict()
        }),200
    
    else:
        return jsonify(message="Invalid email or password"), 401  

@app.route('/users', methods = ['GET'])
# @token_required
def get_users():
    if request.method == 'GET':       
        users=[user.to_dict() for user in User.query.all()]      
  
        return jsonify(users) , 200

@app.route('/products', methods=['GET', 'POST'])
def get_all_products():
    if request.method == 'GET':          
        return make_response(
            jsonify([product.to_dict() for product in Product.query.order_by(Product.price).all()]),
            200
        )
    elif request.method == 'POST':
         data = request.get_json()
         new_product = Product(name=data['name'],
                               image_url = data['image_url'], 
                               price = data['price'], 
                               quantity = data['quantity'], 
                               category = data['category'], 
                               description =data['description'], 
                               user_id = data['user_id'],
                            )
         db.session.add(new_product)
         db.session.commit()
         return make_response(
             jsonify({"message":"successfully added"}),
             200
         )
    
@app.route('/comments', methods = ["POST", "GET"])
def get_all_comments():
    if request.method == "GET":
        all_comments = [comment.to_dict() for comment in Comment.query.all()]       
        response = make_response(
            jsonify(all_comments),
            200
        )
        return response
    elif request.method == "POST":
        data = request.get_json()
        user = User.query.filter_by(id=data['user_id']).first()
        product = Product.query.filter_by(id = data['product_id']).first()
        new_comment = Comment(
            commenter =  f'{user.first_name} {user.second_name}',
            comment = data['comment'],
            rating = data['rating'],
            product_name =  product.name,
            user_id = data['user_id'],
            product_id = data['product_id']        
        )
        db.session.add(new_comment)
        db.session.commit()
        return make_response(
            jsonify({"message": "Added successfully"}),
            200
        )
@app.route('/user/<int:id>', methods=['GET', 'PATCH', 'DELETE'])
# @token_required
def get_one_user(id):
    if request.method == 'GET':
        user = User.query.filter_by(id =id).first()
        return make_response(
            jsonify(user.to_dict()),
            200
        )
    elif request.method == 'DELETE':
        user = User.query.filter_by(id =id).first()
        db.session.delete(user)
        db.session.commit()
        return make_response(
            jsonify({"message":"deleted successfully"}),
            200
        )
    elif request.method == 'PATCH':
        user = User.query.filter_by(id =id).first()
        data = request.get_json()      

        for attr in data:
            setattr(user, attr, data.get(attr))
        db.session.add(user)
        db.session.commit()
        user_dict = user.to_dict()
        response = make_response(
            jsonify(user_dict),
            200
        )
        return response
    
@app.route('/product/<int:id>', methods =["GET","PATCH","DELETE"])
#@token_required
def get_specific_product(id):
    if request.method == "GET":
        product = Product.query.filter_by(id=id).first()
        product_dict = {
                "id": product.id,
                "name": product.name,
                "image_url": product.image_url,
                "price": product.price,
                "quantity": product.quantity,
                "category": product.category,
                "description":product.description,
                "created_at": product.created_at,
                "updated_at": product.updated_at,
                "user_id": product.user_id,
                "comments":[comment.to_dict() for comment in Comment.query.filter_by(product_id = product.id).all()]
            }
        return make_response(
            jsonify(product_dict),
            200
        )
    elif request.method == "DELETE": 
        db.session.delete(Product.query.filter_by(id=id).first() )
        db.session.commit()
        return make_response(
            jsonify({"message":"Deleted successfully"}),
            200
        )
    
    elif request.method == 'PATCH':
        data = request.get_json()
        product = Product.query.filter_by(id=id).first()    

        for attr in data:
            setattr(product, attr, data.get(attr))
        db.session.add(product)
        db.session.commit()
        product_dict = product.to_dict()
        response = make_response(
            jsonify(product_dict),
            200
        )
        return response
    
@app.route("/comment/<int:id>", methods =["DELETE", "GET"])
# @token_required 
def certain_comment(id):
    if request.method == "GET":
        return make_response(
            jsonify(Comment.query.filter_by(id=id).first().to_dict()),
            200
        )
    elif request.method == "DELETE":    
        db.session.delete(Comment.query.filter_by(id=id).first())
        db.session.commit()
        return make_response(
            jsonify({"message":"Delete successfully"}),
            200
        )
@app.route("/comments/<int:user_id>")
# @token_required 
def get_according_user(user_id):
    products_id = [product.id for product in Product.query.filter_by(user_id = user_id).all()] 
    all_comments = []
    i = 0
    while i < len(products_id):
        comments = Comment.query.all()
        for comment in comments:
            if comment.product_id == products_id[i]:
                all_comments.append({
                    "id": comment.id,
                    "customer_name": comment.commenter,
                    "comment":comment.comment,
                    "rating": comment.rating,
                    "product_name": comment.product_name,
                    "created_at": comment.created_at,
                    "user_id": comment.user_id,
                    "product_id":comment.product_id
                    })
        i+= 1
       
    return make_response(
        jsonify(all_comments),
        200
    )

@app.route("/orders", methods = ["GET", "POST"])
# @token_required
def get_all_orders():
    if request.method == "GET":
        all_orders = []
        all_id = [product.id for product in Product.query.all()]
        for order in Order.query.all():
            if order.product_id in all_id :
                product_ = Product.query.filter_by(id=order.product_id).first().to_dict() 
                shop  = product_['user_id']          
                orders_dict = {
                "id": order.id,
                "product_name": order.product_name,
                "customer_name": order.customer_name,
                "payment_method":order.payment_method,
                "status": order.status,
                "quantity":order.quantity,
                "created_at": order.created_at,
                "updated_at": order.updated_at,
                "total_amount": order.total_amount,
                "product_id": order.product_id,
                "shop_id" : shop,
                "user_id": order.user_id,
                } 
                all_orders.append(orders_dict)

        return make_response(
            jsonify(all_orders)
        )
    elif request.method == "POST":
        data = request.get_json()
        product = Product.query.filter_by(id = data['product_id']).first()
        user = User.query.filter_by(id = data['user_id']).first()

        new_order = Order(
            product_name = product.name,
            payment_method = data['payment_method'],
            customer_name =  f"{user.first_name} {user.second_name}",
            status = data['status'],
            quantity = data['quantity'],
            total_amount = data['quantity']* product.price,
            product_id = data['product_id'],
            user_id = data['user_id']
        )
        db.session.add(new_order)
        db.session.commit()

        return make_response(
            jsonify({"message":"Order added successfully"}),
            200
        )
    
@app.route("/order/<int:id>", methods = ["GET", "PATCH", "DELETE"])
#@token_required
def get_an_order(id):
    if request.method == "GET":
        return make_response(
            jsonify([Order.query.filter_by(id = id).first().to_dict()]),
            200
        )
    elif request.method == "PATCH":
        data = request.get_json()
        order = Order.query.filter_by(id=id).first()    

        for attr in data:
            setattr(order, attr, data.get(attr))
        db.session.add(order)
        db.session.commit()
        product_dict = order.to_dict()
        response = make_response(
            jsonify(product_dict),
            200
        )
        return response
    elif request.method == "DELETE":
        db.session.delete(Order.query.filter_by(id=id).first()) 
        db.session.commit()
        return make_response(
            jsonify({"message": "Deleted successfully"})
        )

@app.route('/shopping', methods = ["GET", "POST"])
# @token_required
def getting_shopping_cart():
    if request.method == "GET":
        return make_response(
            jsonify([shop.to_dict() for shop in Shopping.query.all()]),
            200            
        )
    elif request.method == "POST":
        data = request.get_json()
        product = Product.query.filter_by(id=data['product_id']).first()
        new_item = Shopping(
            product_name = product.name,
            quantity = data['quantity'],
            price = product.price,
            product_id = data['product_id'],
            user_id =data['user_id']
        )
        db.session.add(new_item)
        db.session.commit()
        return make_response(
            jsonify({"message":"Added successfuly"}),
            200
        )

@app.route('/shopping/<int:id>', methods = ["GET", "PATCH","DELETE"])
#@token_required
def get_one_shopping(id):
    if request.method == "GET":
        return make_response(
            jsonify(Shopping.query.filter_by(id=id).first().to_dict()),
            200
        )
    elif request.method == "DELETE":
        db.session.delete(Shopping.query.filter_by(id=id).first())
        db.session.commit() 
        return make_response(
            jsonify({"messsage":"Deleted successfully"}),
            200
        )
    elif request.method == "PATCH":
        data = request.get_json()
        item = Shopping.query.filter_by(id=id).first()    

        for attr in data:
            setattr(item, attr, data.get(attr))
        db.session.add(item)
        db.session.commit()        
        response = make_response(
            jsonify(item.to_dict()),
            200
        )
        return response  

@app.route('/admin/<int:id>')
#@token_required
def get_dashboard_details(id):
    user = User.query.filter_by(id=id).first()
    products = Product.query.filter_by(user_id=id).all()
    number_of_products = 0
    orders = 0
    ratings =[]
    if user.role == 'Seller':
        for product in products:
            number_of_products += 1
            for comment in Comment.query.filter_by(product_id=product.id).all():
                ratings.append(comment.rating)
            for order in Order.query.filter_by(product_id=product.id).all():
                orders += 1    
        return make_response(
        jsonify(
            {
                "full_name": f"{user.first_name} {user.second_name}",
                "id":user.id,
                "shop_id": f"SHOP00{user.id}",
                "products": number_of_products,
                "rating": int(statistics.mean(ratings)),
                "orders": orders
            }
            ),
            200
        )
    return make_response(
        jsonify({"message":"Not authorized"}),
        404
    )

@app.route('/signup', methods=["POST"])
def handle_signup():
    data =request.get_json()
    new_user = User(
        first_name = data['first_name'],
        second_name = data['second_name'],
        email = data['email'],
        phone_number = data['phone_number'],
        address =data['address'],
        password = data['password'],
        role = data['role']
    )
    
    user_emails = []
    users = User.query.all()
    for user in users :
        user_emails.append(user.email)

    if data["email"] in users:
        response = make_response(
            jsonify({"message":"user exists"}),
            400
        )
        return(
           response 
        )
    else:
        db.session.add(new_user)
        db.session.commit()
        return make_response(
            jsonify({"message":"added succesfully"}),
            200
        )

@app.errorhandler(NotFound)
def handle_not_found(e):
    response = make_response(
        "Not Found: The requested resource does not exist.",
        404
    )

    return response   



if __name__ == '__main__':
    app.run(port=5555, debug=True)