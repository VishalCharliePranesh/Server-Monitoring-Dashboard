from flask import Flask, render_template, jsonify
from monitor import get_server_stats

app = Flask(__name__)

@app.route("/")
def dashboard():
    return render_template("dashboard.html")

@app.route("/stats")
def stats():
    return jsonify(get_server_stats())

if __name__ == "__main__":
    app.run(host="0.0.0.0", port=5000, debug=True)