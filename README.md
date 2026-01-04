# 🎓 Course Management Application

A modern **full-stack Course Management Application** built using **React, Node.js, Express, and SQLite**.  
The application enables users to **register, log in securely, and manage courses** through a clean and colorful user interface.

---

## ✨ Features

### 🔐 Authentication
- User registration with validation
- Secure login using JWT authentication
- Password hashing with bcrypt
- Token-based authorization
- Logout functionality

### 📘 Course Management
- Create new courses
- View all courses
- Delete courses
- Real-time updates on dashboard

### 🎨 User Experience
- Colorful gradient UI
- Card-based layout
- Simple, clean, and intuitive navigation

---

## 🛠️ Tech Stack

**Frontend**
- React
- React Router DOM
- Axios
- CSS (Custom styling)

**Backend**
- Node.js
- Express.js
- SQLite
- JWT (JSON Web Token)
- bcryptjs

---

## 📂 Project Structure

course-management-app/
├── backend/
│ ├── db/
│ ├── middleware/
│ ├── routes/
│ └── server.js
│
└── frontend/
├── public/
├── src/
│ ├── components/
│ ├── services/
│ └── styles.css
└── package.json

yaml
Copy code

---

## 🚀 Getting Started

### 1️⃣ Clone the Repository
```bash
git clone https://github.com/manmohangithub/course-management-app.git
cd course-management-app
2️⃣ Start the Backend
bash
Copy code
cd backend
npm install
npm start
Runs on: http://localhost:5000

3️⃣ Start the Frontend
bash
Copy code
cd frontend
npm install
npm start
Runs on: http://localhost:3000

🔌 API Endpoints
Authentication
Method	Endpoint	Description
POST	/api/auth/register	Register user
POST	/api/auth/login	Login user

Courses
Method	Endpoint	Description
POST	/api/courses	Create course
GET	/api/courses	Get all courses
DELETE	/api/course/:id	Delete course

🗄️ Database Schema
Users

id (Primary Key)

name

email (Unique)

password (Hashed)

Courses

id (Primary Key)

name

description

instructor

📸 Screenshots
Add screenshots of:

Login Page

Register Page

Dashboard

Course Management

🌟 Key Highlights
Clean REST API design

Secure authentication flow

Simple and scalable architecture

Lightweight SQLite database

Beginner-friendly full-stack project

👤 Author
Medapati Manmohan Reddy
GitHub: https://github.com/manmohangithub

