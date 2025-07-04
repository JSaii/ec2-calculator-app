from flask import Flask, request, jsonify
from flask_cors import CORS

app = Flask(__name__)

@app.route("/hello")
def hello():
    return "Hello World 2"

@app.route("/calculate", methods=["POST"])
def calculate():
    return jsonify({"result": "TBD"})

if __name__ == "__main__":
    app.run(debug=True)
