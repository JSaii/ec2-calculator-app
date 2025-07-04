from flask import Flask, request, jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

@app.route("/hello")
def hello():
    return jsonify({"message":"Hello World"})

@app.route("/calculate", methods=["POST"])
def calculate():
    data = request.get_json()
    num1 = float(data["num1"]) if data["num1"] != '' else 0.0
    num2 = float(data["num2"]) if data["num2"] != '' else 0.0

    operation = data["operation"]

    if operation == "add":
        result = num1 + num2
    elif operation == "subtract":
        result = num1 - num2
    elif operation == "multiply":
        result = num1 * num2
    elif operation == "divide":
        result = num1 / num2
    else:
        return jsonify({"error": "Invalid operation"}), 400
    
    return jsonify({"result":result})

if __name__ == "__main__":
    app.run(debug=True)
