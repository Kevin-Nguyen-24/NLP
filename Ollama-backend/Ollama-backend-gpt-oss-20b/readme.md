# GPT-OSS-20B Full-Stack Deployment (Ollama + Backend + Frontend)

This project runs the **GPT-OSS 20B** model on [Ollama](https://flask-ask-898227062544.europe-west1.run.app/) in the backend, with a separate frontend for communicating via a REST API.

---

## 🚀 Features

- **Backend**: Connects to Ollama, streams responses.
- **Frontend**: Simple UI to send messages and display streaming output.
- **Model**: `gpt-oss:20b` pulled and served by Ollama.
- **Deployment Ready**: Works locally with Docker Compose or on cloud services like Google Cloud Run.

---

## 📦 Requirements

- **Docker** & **Docker Compose**
- **Ollama** (installed locally or running in a container)

---

## 🗂 Project Structure

Project/
│
├── app/
│ ├── model/ # (Model-specific code, if any)
│ ├── routes/ # API route handlers
│ ├── static/ # Static frontend assets
│ │ └── script.js
│ ├── template/ # HTML templates
│ │ ├── index.html
│ │ └── layout.html
│ └── init.py
│
├── app.py # Flask entry point
├── Dockerfile # Backend Docker build
├── requirements.txt # Python dependencies



