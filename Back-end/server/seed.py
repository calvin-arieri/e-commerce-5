from random import choice as rc
from faker import Faker
from app import app
from models import User, Product, Order, Comment,db, Shopping

db.init_app(app)

fake = Faker()

with app.app_context():
    User.query.delete()
    Product.query.delete()
    Order.query.delete()
    Comment.query.delete()

    users = []
    roles = ['Buyer', 'Seller']
    for n in range(50):
        user = User(first_name=fake.first_name(),second_name = fake.first_name(), email=fake.email(), phone_number=fake.phone_number(),address=fake.address(), password = fake.password(), role = rc(roles))
        users.append(user)
    db.session.add_all(users)

    comments = []
    comment1 = ['Good product', 'Bad Product', 'Average_product','Poor product']
    rating = [1, 1.5, 2, 2.5, 3, 3.5, 4, 4.5 ,5]
    products = ['Hp pavillion', 'samsung s8', 'Blue-Araimo', 'Next-gen phone','Hp heroes','Mac book pro']
    for n in range(50):
        comment = Comment(commenter = fake.first_name(), comment= rc(comment1),rating = rc(rating), product_name = rc(products), product_id = rc([1,2,3,4,5,6,7,8,9,10]), user_id =rc([1, 2,3,4,5,6,7,8,9,10]) )
        comments.append(comment)
    db.session.add_all(comments)
    
    orders = []
    payments = ['Mpesa', 'paypal', 'Visa']
    statuses = ['Confirmed', 'Shiping', 'Soon to be delivered', 'Ready for pick-up'] 
    for n in range(100):
        new_order = Order(product_name = rc(products), payment_method = rc(payments), status = rc(statuses), quantity = 8, customer_name = fake.first_name(),total_amount = rc([80000,60000,50000,90000,300000]), product_id = rc([1,2,3,4,5,6,7,8,9,10]), user_id =rc([1, 2,3,4,5,6,7,8,9,10]))
        orders.append(new_order)
    db.session.add_all(orders)    

    products_to_add = []
    images = ['https://images.unsplash.com/photo-1658312226966-29bd4e77c62c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8aHAlMjBzcGVjdHJlJTIweDM2MHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60', 'https://images.unsplash.com/photo-1589561084283-930aa7b1ce50?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8aHAlMjBzcGVjdHJlJTIweDM2MHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60', 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Ymx1ZXRvb3RoJTIwaGVhZHBob25lc3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60', 'https://images.unsplash.com/photo-1585155784229-aff921ccfa10?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=327&q=80']
    categories = ['Televisions' , 'Laptops', 'Smartphones', 'Tablets', 'Cameras']
    prices = [80000,60000,50000,90000,300000]
    for n in range(30):
        new_product = Product(name=rc(products), image_url = rc(images), price = rc(prices), quantity = 8, category = rc(categories), description = 'good product', user_id =rc([1,2,3,4,5]) )
        products_to_add.append(new_product)
    db.session.add_all(products_to_add)

    shopping_cart = []
    for n in range(100):
        new_cart = Shopping(
            product_name = rc(products),
            quantity = 10,
            price = rc(prices),
            product_id = rc([1,2,3,4,5,6,7,8,9,10]),
            user_id =rc([1,2,3,4,5,6,7,8,9,10])            
        )
        shopping_cart.append(new_cart)
    db.session.add_all(shopping_cart)    

    db.session.commit()    