from flask_sqlalchemy import SQLAlchemy
from sqlalchemy_serializer import SerializerMixin

db = SQLAlchemy()
class User(db.Model, SerializerMixin):
    __tablename__='users'
    serialize_rules=('-products.user', '-comments.user','-orders.order', '-shopping.user', '-password','-searchhistory.user')

    id = db.Column(db.Integer, primary_key=True)
    first_name = db.Column(db.String)
    second_name = db.Column(db.String)
    email = db.Column(db.String)
    phone_number= db.Column(db.String)
    address = db.Column(db.String)
    password = db.Column(db.String)
    role = db.Column(db.String)
    created_at = db.Column(db.DateTime, server_default=db.func.now())
    updated_at = db.Column(db.DateTime, onupdate=db.func.now())

    products = db.relationship('Product', backref='user')
    comments = db.relationship('Comment', backref='user')
    orders = db.relationship('Order', backref='order')
    shopping_cart = db.relationship('Shopping' , backref = 'user')
    searches = db.relationship('Search', backref = 'user')   
    
    def to_dict(self):
        info_dict = {             
            "first_name": self.first_name,
            "second_name": self.second_name,
            "email": self.email,
            "phone_number": self.phone_number,
            "address":self.address,           
            "role":self.role,
            "created_at":self.created_at,
            "updated_at":self.updated_at
        }
        return info_dict


class Comment(db.Model, SerializerMixin):
    __tablename__ = 'comments'
    serialize_rules=('-user.comments', '-product.comments')

    id = db.Column(db.Integer , primary_key = True)
    commenter = db.Column(db.String)
    comment = db.Column(db.String)
    rating =db.Column(db.Integer)
    product_name = db.Column(db.String)
    created_at = db.Column(db.DateTime, server_default=db.func.now())
    updated_at = db.Column(db.DateTime, onupdate=db.func.now())

    user_id = db.Column(db.Integer , db.ForeignKey('users.id'))
    product_id = db.Column(db.Integer, db.ForeignKey('products.id'))

    def to_dict(self):
        comment_dict = {
            "id":self.id,
            "commenter": self.commenter,
            "comment": self.comment,
            "rating":self.rating,  
            "product_name": self.product_name,
            "created_at": self.created_at,
            "user_id": self.user_id,
            "product_id": self.product_id              
        }
        return comment_dict

class Product(db.Model, SerializerMixin):
    __tablename__ = 'products'
    serialize_rules =('-user.products','-comments.product','-orders.product','-shopping.product', '-specs')

    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String)
    image_url = db.Column(db.String)
    price = db.Column(db.Integer)
    quantity = db.Column(db.Integer)
    category = db.Column(db.String)
    description = db.Column(db.String)
    created_at = db.Column(db.DateTime, server_default=db.func.now())
    updated_at = db.Column(db.DateTime, onupdate=db.func.now())

    user_id = db.Column(db.Integer, db.ForeignKey('users.id'))
    comments = db.relationship('Comment', backref= 'product' )
    orders = db.relationship('Order', backref='product')
    shopping_cart_items = db.relationship('Shopping', backref='product')
  

    def to_dict(self):
        product_dict = {
                "id": self.id,
                "name": self.name,
                "image_url": self.image_url,
                "price": self.price,
                "quantity": self.quantity,
                "category": self.category,
                "description":self.description,
                "created_at": self.created_at,
                "updated_at": self.updated_at,
                "user_id": self.user_id,
            }
        return product_dict
                

class Order(db.Model):
    __tablename__ = 'orders'
    serialize_rules = ('-product')

    id = db.Column(db.Integer, primary_key=True)
    product_name = db.Column(db.String)
    payment_method = db.Column(db.String)
    customer_name = db.Column(db.String)
    status = db.Column(db.String)
    quantity = db.Column(db.Integer)
    total_amount = db.Column(db.Integer)
    created_at = db.Column(db.DateTime, server_default=db.func.now())
    updated_at = db.Column(db.DateTime, onupdate=db.func.now())

    product_id = db.Column(db.Integer, db.ForeignKey('products.id'))
    user_id = db.Column(db.Integer, db.ForeignKey('users.id'))

    def to_dict(self):
        orders_dict = {
            "id": self.id,
            "product_name": self.product_name,
            "customer_name": self.customer_name,
            "payment_method":self.payment_method,
            "status": self.status,
            "quantity":self.quantity,
            "created_at": self.created_at,
            "updated_at": self.updated_at,
            "total_amount": self.total_amount,
            "product_id": self.product_id,
            "user_id": self.user_id,
        }
        return orders_dict 

class Shopping(db.Model):
    __tablename__ = 'shopping'
    serialize_rules = ('-user.shopping', '-product.shopping')

    id = db.Column(db.Integer, primary_key=True)
    product_name = db.Column(db.String)
    quantity = db.Column(db.Integer)
    price = db.Column(db.Integer)

    product_id = db.Column(db.Integer, db.ForeignKey('products.id'))
    user_id = db.Column(db.Integer, db.ForeignKey('users.id'))

    def to_dict(self):
        shoping_dict ={
            "id": self.id,
            "product_name":self.product_name,
            "quantity":self.quantity,
            "price": self.price,
            "product_id": self.product_id,
            "user_id":self.user_id
        }
        return shoping_dict

class Search(db.Model, SerializerMixin):
    __tablename__ = 'searchhistory'
    serialize_rules=('-user.searchhistory')

    id = db.Column(db.Integer, primary_key = True)
    search_term = db.Column(db.String )
    created_at = db.Column(db.DateTime, server_default=db.func.now())
    updated_at = db.Column(db.DateTime, onupdate=db.func.now())

    user_id = db.Column(db.Integer, db.ForeignKey('users.id'))