# ☁️ Cloudy Task Manager 🚀

![Build Status](https://img.shields.io/badge/Build-Passing-brightgreen?style=for-the-badge&logo=jenkins)
![Kubernetes](https://img.shields.io/badge/Kubernetes-Ready-blue?style=for-the-badge&logo=kubernetes)
![Spring Boot](https://img.shields.io/badge/Spring_Boot-3.x-6DB33F?style=for-the-badge&logo=springboot)
![Docker](https://img.shields.io/badge/Docker-Containerized-2496ED?style=for-the-badge&logo=docker)

A modern, high-performance **Task Management Application** built with **Spring Boot** and a sleek **Glassmorphic UI**. 
This project demonstrates **end-to-end DevOps** from development to **Kubernetes deployment**.

---

## 🔥 Features

* **✨ Modern Glass UI:** Clean and aesthetically pleasing design with smooth transitions.
* **⚡ Full CRUD:** Create, Update, Delete, and Toggle Status functionality.
* **🔗 REST API Based:** Seamless communication between frontend and backend.
* **🗄️ PostgreSQL Integration:** Reliable data persistence.
* **🐳 Docker Containerized:** Ready to run anywhere.
* **☸️ Kubernetes Ready:** Built for robust orchestration.
* **🤖 Jenkins CI/CD:** Automated pipeline for seamless deployments.
* **📱 Responsive Design:** Works perfectly on Mobile + Desktop.

---

## 💻 Tech Stack

| Layer | Technology |
| :--- | :--- |
| **🎨 Frontend** | HTML5, CSS3 (Glassmorphism, 3D Elevation, Smooth Hover Animations), Vanilla JavaScript (Async Fetch API, Dynamic UI rendering) |
| **⚙️ Backend** | Java 17, Spring Boot 3, Spring Data JPA, REST API |
| **🗄️ Database** | PostgreSQL |
| **🔄 DevOps** | Docker, Kubernetes, Jenkins, Ubuntu VM |

---

## 📸 UI Preview

### Application UI

<p align="center">
  <img src="screenshots/app_ui.png" width="45%" alt="App UI"/>
  <img src="screenshots/code.png" width="45%" alt="Code Architecture"/>
</p>

> Clean layered architecture using **Controller ➔ Service ➔ Repository**.

### Task Status
Toggle button with color indicators:
* 🟢 **Completed**
* 🔵 **Pending**
* 🔴 **Delete action**

---

## 🏗️ Architecture

**3-Tier Architecture Flow:**
`🌐 Frontend (HTML/CSS/JS)` ➔ `⚙️ Spring Boot REST API` ➔ `🗄️ PostgreSQL Database`

---

## 📁 Project Structure

```text
task-manager/
│
├── 📁 frontend/
│   ├── index.html
│   ├── style.css
│   └── app.js
│
├── 📁 backend/
│   └── spring-boot-app/
│
├── 📁 k8s/
│   ├── namespace.yaml
│   ├── frontend-deployment.yaml
│   ├── backend-deployment.yaml
│   └── postgres.yaml
│
├── 📁 screenshots/
│   ├── app_ui.png
│   └── code.png
│
└── 📜 README.md
⚙️ Local Setup
1. Clone Repository
Bash
git clone [https://github.com/yourusername/cloudy-task-manager.git](https://github.com/yourusername/cloudy-task-manager.git)
cd cloudy-task-manager
🐘 Database Setup
1. Create database:

SQL
CREATE DATABASE taskdb;
2. Update application.properties:

Properties
spring.datasource.url=jdbc:postgresql://localhost:5432/taskdb
spring.datasource.username=postgres
spring.datasource.password=password
▶️ Run Backend
Bash
mvn spring-boot:run
Note: Backend runs on http://localhost:8080

🌐 Run Frontend
Simply open the file in your browser:

Plaintext
index.html
🐳 Docker Build
Backend:

Bash
docker build -t cloudy/task-backend .
Frontend:

Bash
docker build -t cloudy/task-frontend .
☸️ Kubernetes Deploy
1. Apply configurations:

Bash
kubectl apply -f k8s/
2. Check pods:

Bash
kubectl get pods -n task-manager-aplication
🔄 CI/CD Pipeline
💻 GitHub Push ➔ 🤖 Jenkins Build ➔ 🐳 Docker Image ➔ ☁️ Push Docker Hub ➔ ☸️ Kubernetes Deploy

📌 Future Improvements
🔒 Authentication (JWT)

👤 User login system

📂 Task categories

⏰ Due date reminders

🌙 Dark mode UI

🌐 Ingress + domain setup

👨‍💻 Author
Cloudy
Full Stack + DevOps Learner

⭐ If you like this project
Give it a star on GitHub!
