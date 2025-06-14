import requests
import json

# Replace with your real API key
API_KEY = "AIzaSyABBBQj5w6E33HEgL5I2dWB2Fp3PPW5Q70"
URL = f"https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key={API_KEY}"

headers = {
    "Content-Type": "application/json"
}

data = {
    "contents": [
        {
            "parts": [
                {
                    "text": "I want to create a portifolio website where can start"
                }
            ]
        }
    ]
}

response = requests.post(URL, headers=headers, json=data)

# Check for success
if response.status_code == 200:
    result = response.json()
    text = result["candidates"][0]["content"]["parts"][0]["text"]
    print("Gemini says:", text)
else:
    print("Error:", response.status_code)
    print(response.text)
