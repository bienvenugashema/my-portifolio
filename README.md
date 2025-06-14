#  Portfolio

A modern, responsive developer portfolio built with Flask, featuring:
- Project showcase
- About and contact pages
- A floating Gemini AI chatbot (Markdown-enabled)
- Mobile-friendly navigation with hamburger menu

## Features
- Python, PHP Laravel, and React skills highlighted
- Gemini chatbot with Markdown rendering
- Responsive design (Bootstrap 5)
- Environment variable support for API keys

## Project Structure
```
your-portfolio/
├── app.py
├── requirements.txt
├── static/
│   ├── css/
│   │   └── style.css
│   ├── js/
│   │   └── script.js
│   └── img/
│       └── profile.jpeg
├── templates/
│   ├── base.html
│   ├── index.html
│   ├── about.html
│   ├── projects.html
│   └── contact.html
```

## Setup
1. Clone the repo and navigate to the project folder.
2. Create a virtual environment and activate it:
   ```sh
   python -m venv .venv
   source .venv/Scripts/activate  # On Windows
   ```
3. Install dependencies:
   ```sh
   pip install -r requirements.txt
   ```
4. Create a `.env` file and add your Gemini API key:
   ```env
   GEMINI_API_KEY=your_api_key_here
   ```
5. Run the app:
   ```sh
   python your-portfolio/app.py
   ```
6. Open your browser at `http://127.0.0.1:5000`

## Security
- Never commit your `.env` file or API keys.
- `.gitignore` is set to exclude `.env` and `.venv`.

## Customization
- Replace `static/img/profile.jpeg` with your own photo.
- Edit `templates/about.html`, `projects.html`, etc. to personalize your content.

## License
MIT
