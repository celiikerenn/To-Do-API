# 📝 To-Do List API

A simple and fully Dockerized **To-Do List REST API** built with **Flask** and **PostgreSQL**.  
Supports full CRUD operations and is ready for CI/CD using **GitHub Actions**.

---

## 🚀 Features

- RESTful API with Flask
- PostgreSQL integration
- Docker & Docker Compose support
- GitHub Actions CI/CD ready
- Simple and extensible codebase

---

## 📁 Folder Structure

```
todo_api/
├── backend/
│   ├── app.py
│   ├── requirements.txt
│   └── Dockerfile
├── docker-compose.yml
├── README.md
└── .github/
    └── workflows/
        └── docker-deploy.yml
```

---

## 📥 Clone the Repository

```bash
git clone https://github.com/celiikerenn/todo-api.git
cd todo-api
```

---

## 🧱 Build & Run the App

```bash
docker compose up --build -d
```

Then access the API at:

```
http://localhost:5000
```

---

## 🔌 API Endpoints

| Method | Endpoint         | Description           |
|--------|------------------|-----------------------|
| GET    | `/tasks`         | List all tasks        |
| POST   | `/tasks`         | Add new task          |
| PUT    | `/tasks/<id>`    | Update task by ID     |
| DELETE | `/tasks/<id>`    | Delete task by ID     |

---

## 🧪 Example Requests

### ➕ Add a Task

```bash
curl -X POST -H "Content-Type: application/json" \
-d '{"title": "Task 1"}' \
http://localhost:5000/tasks
```

### 📋 Get All Tasks

```bash
curl http://localhost:5000/tasks
```

### ✏️ Update a Task

```bash
curl -X PUT -H "Content-Type: application/json" \
-d '{"title": "Updated Task", "done": true}' \
http://localhost:5000/tasks/1
```

### 🗑 Delete a Task

```bash
curl -X DELETE http://localhost:5000/tasks/1
```

---

## 🛠 Tech Stack

- Python (Flask)
- PostgreSQL
- Docker
- Docker Compose
- Github Actions

---


## 🖥️ Frontend

The frontend of this project is located in the `frontend/` directory and is built using plain HTML, CSS, and JavaScript (Vanilla JS).

### Features:
- View task list
- Add new tasks
- Edit task titles
- Delete tasks
- Mark tasks as complete (via checkbox)

### How to Run:

Start a simple static file server from the `frontend/` directory:

```bash
cd frontend/
python3 -m http.server 8000

Then open your browser and navigate to: http://localhost:8000

