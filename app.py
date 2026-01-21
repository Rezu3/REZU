from flask import Flask, render_template

app = Flask(__name__)

# Loading page route
@app.route("/")
def loading():
    return render_template("loading.html")

# Quiz pages
@app.route("/index")
def index():
    return render_template("index.html")

@app.route("/gk")
def gk():
    return render_template("gk.html")

@app.route("/math")
def math():
    return render_template("math.html")

@app.route("/gs")
def gs():
    return render_template("gs.html")

# Backend wake
@app.route("/api/ping")
def ping():
    return "ok"

if __name__ == "__main__":
    app.run(debug=True)
