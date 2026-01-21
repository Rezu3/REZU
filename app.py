from flask import Flask, render_template, redirect
 

app = Flask(__name__)
CORS(app)  # Optional, যদি AJAX / API call থাকে

# ------------------------------
# Root redirect → Loading page
# ------------------------------
@app.route("/")
def root():
    # যেহেতু frontend loading.html Netlify এ থাকবে
    return redirect("https://quizwithrezu.netlify.app/loading.html")

# ------------------------------
# Main Pages
# ------------------------------

# Home / Subject Selection Page
@app.route("/index")
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

# ------------------------------
# Backend Wake / Ping route
# ------------------------------
@app.route("/api/ping")
def ping():
    return "ok"

# ------------------------------
# Run server
# ------------------------------
if __name__ == "__main__":
    app.run(debug=True)

