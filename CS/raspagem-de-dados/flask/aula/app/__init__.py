from flask import Flask
from flask_sqlalchemy import SQLAlchemy
from flask_migrate import Migrate
from flask_login import LoginManager
from config import Config
from app.models.tables import User
from app.models import db



app = Flask(__name__)
app.config.from_object(Config)
db.init_app(app)
migrate = Migrate(app, db)

login_manager = LoginManager()
login_manager.init_app(app)

from app.models import tables, forms
from app.controllers import default

@login_manager.user_loader
def load_user(user_id):
    return User.get(user_id)
