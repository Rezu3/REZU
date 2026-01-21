from flask import Flask, render_template, redirect

app = Flask(__name__)

# Root redirect → Loading page
@app.route("/")
def root():
    return redirect("https://quizwithrezu.netlify.app/loading.html")

# Quiz pages (optional if you want Flask serve)
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

# Backend wake / ping route
@app.route("/api/ping")
def ping():
    return "ok"

if __name__ == "__main__":
    app.run(debug=True)
