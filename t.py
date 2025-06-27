import requests

GEMINI_API_KEY = "AIzaSyAUyO9moTg00Dk6m4eOU1ILkR_izAuxj_8"

def ask_gemini(user_input):
    url = f"https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent?key={GEMINI_API_KEY}"
    payload = {
        "contents": [
            {
                "parts": [
                    {"text": user_input}
                ]
            }
        ]
    }
    response = requests.post(url, json=payload)
    data = response.json()
    print(data)

ask_gemini("Who are you?")
