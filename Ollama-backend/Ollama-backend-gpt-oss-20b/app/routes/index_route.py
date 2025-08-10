import os
from flask import Blueprint, render_template, request, jsonify
import requests

index_bp = Blueprint("index", __name__)

# Your Ollama Cloud Run base URL
OLLAMA_BASE = os.getenv(
    "API_URL",
    "https://gpt-oss-20b-1032008018937.europe-west1.run.app"
)

@index_bp.route("/")
@index_bp.route("/home")
def home():
    # pass to template for display (not used by JS if we proxy — just informational)
    return render_template("index.html", api_url=OLLAMA_BASE)


# ---- Proxy endpoint to avoid CORS in the browser ----
@index_bp.route("/ask", methods=["POST"])
def ask():
    """
    Forwards {message} to Ollama /api/generate and returns its JSON.
    """
    data = request.get_json(silent=True) or {}
    message = (data.get("message") or "").strip()
    model = data.get("model") or "gpt-oss:20b"
    if not message:
        return jsonify({"error": "message (string) is required"}), 400

    try:
        r = requests.post(
            f"{OLLAMA_BASE.rstrip('/')}/api/generate",
            json={"model": model, "prompt": message, "stream": False},
            timeout=60
        )
        return (r.text, r.status_code, {"Content-Type": r.headers.get("Content-Type", "application/json")})
    except Exception as e:
        return jsonify({"error": "Upstream error", "details": str(e)}), 502
