# 📝 To-Do List API

This project is a simple **To-Do List REST API** built with **Flask** and **PostgreSQL**, containerized using **Docker** and managed via **Docker Compose**. It allows users to create, retrieve, update, and delete tasks. The project is designed for learning DevOps basics and can be extended further.


## 🚀 Features

- RESTful API: `GET`, `POST`, `PUT`, `DELETE`
- PostgreSQL database
- Docker + Docker Compose support
- CI/CD ready with GitHub Actions


## 📁 Folder Structure

todo_api/
├── backend/
│  ├── app.py
│  ├── requirements.txt
│  ├── Dockerfile
├── docker-compose.yml
└── .github/
└── workflows/
└── docker-deploy.yml


## ⚙️ Requirements

- Docker
- Docker Compose
- Git (for version control)
- GitHub account (for CI/CD)

## 🧪 Usage

### 1. Clone the repository

```bash
git clone https://github.com/your-username/todo-api.git
cd todo-api

2. Build & Run the app
docker compose up --build -d

Then access the API at:
http://localhost:5000

🔌 API Endpoints
Method	    Endpoint	    Description
GET	        /tasks	        List all tasks
POST	    /tasks	        Add new task
PUT	        /tasks/<id>	    Update task by ID
DELETE	    /tasks/<id>	    Delete task by ID

📦 Example Requests
➕ Add a Task
curl -X POST -H "Content-Type: application/json" \
-d '{"title": "Task 1"}' \
http://localhost:5000/tasks

📋 Get All Tasks
curl http://localhost:5000/tasks

✏️ Update a Task
curl -X PUT -H "Content-Type: application/json" \
-d '{"title": "Updated Task", "done": true}' \
http://localhost:5000/tasks/1

🗑 Delete a Task
curl -X DELETE http://localhost:5000/tasks/1

🛠 Tech Stack
Python (Flask)
PostgreSQL
Docker
Git & GitHub
