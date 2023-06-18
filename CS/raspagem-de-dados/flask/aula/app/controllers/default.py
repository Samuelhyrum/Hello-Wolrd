from app import app
from flask import render_template, flash
from app.models.forms import LoginForm
from app.models.tables import User
from flask_login import login_user

@app.route("/index")
@app.route("/")
def index():
    return render_template('index.html')

@app.route("/login", methods=['GET', 'POST'])
def login():
    form = LoginForm()
    if form.validate_on_submit():
        user = User.query.filter_by(username=form.username.data).first() 
        if user and user.password == form.data.password:
            login_user(user)  
            flash("Logged in.") 
        else:
            flash("Invalid login.")
    else:
        print(form.errors)
    return render_template('login.html', form=form)