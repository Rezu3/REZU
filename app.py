from flask import Flask, render_template

app = Flask(__name__)

# Home / Subject Selection Page
@app.route("/")
def index():
    return render_template("index.html")

# GK Quiz
@app.route("/gk")
def gk():
    return render_template("gk.html")

# Math Quiz
@app.route("/math")
def math():
    return render_template("math.html")

# Group C/D PYQ
@app.route("/gs")
def gs():
    return render_template("gs.html")

if __name__ == "__main__":
    app.run(debug=True)
