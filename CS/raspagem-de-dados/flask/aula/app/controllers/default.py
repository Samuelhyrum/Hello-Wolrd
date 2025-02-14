from app import app, login_manager
from flask import render_template, flash, redirect, url_for
from app.models.forms import LoginForm
from app.models.tables import User
from flask_login import login_user, logout_user, login_required


@login_manager.user_loader
def load_user(id):
    return User.query.get(int(id))


@app.route("/index")
@app.route("/")
def index():
    return render_template('index.html')

@app.route("/login", methods=["GET", "POST"])
def login():
    form = LoginForm()
    if form.validate_on_submit():
        user = User.query.filter_by(username=form.username.data).first() 
        if user and user.password == form.password.data:
            login_user(user)  
            flash("Logged in.") 
            return redirect(url_for("index"))
        else:
            flash("Invalid login.")
    return render_template('login.html', form=form)

@app.route("/logout")
def logout():
    logout_user()
    flash("Logged out")
    return redirect(url_for('index'))