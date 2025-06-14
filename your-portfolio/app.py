# app.py
from flask import Flask, render_template, request, jsonify
import requests
import os

# Set the template_folder and static_folder to the absolute paths
BASE_DIR = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
TEMPLATE_DIR = os.path.join(BASE_DIR, 'templates')
STATIC_DIR = os.path.join(BASE_DIR, 'static')

app = Flask(__name__, template_folder=TEMPLATE_DIR, static_folder=STATIC_DIR)

GEMINI_API_KEY = "AIzaSyABBBQj5w6E33HEgL5I2dWB2Fp3PPW5Q70"
GEMINI_API_URL = "https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=" + GEMINI_API_KEY

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/about')
def about():
    return render_template('about.html')

@app.route('/projects')
def projects():
    return render_template('projects.html')

@app.route('/contact')
def contact():
    return render_template('contact.html')

@app.route('/chat', methods=['POST'])
def chat():
    user_message = request.json.get('message')
    payload = {
        "contents": [
            {"parts": [{"text": user_message}]}
        ]
    }
    headers = {'Content-Type': 'application/json'}
    response = requests.post(GEMINI_API_URL, json=payload, headers=headers)
    if response.ok:
        data = response.json()
        try:
            reply = data['candidates'][0]['content']['parts'][0]['text']
        except Exception:
            reply = "Sorry, I couldn't understand the response."
        return jsonify({"reply": reply})
    else:
        return jsonify({"reply": "Error contacting Gemini API."}), 500

if __name__ == '__main__':
    app.run(debug=True)
