📚 Course Management Application (Full Stack)

A full-stack Course Management Application built using React, Node.js, Express, and SQLite.
The application allows users to register, login, and manage courses with a secure and colorful user interface.

🚀 Features
🔐 Authentication

User Registration with validation

User Login with JWT authentication

Password hashing using bcrypt

Secure token-based authorization

Logout functionality

📘 Course Management (CRUD)

Create a new course

View all available courses

Delete courses

Real-time updates on dashboard

🎨 User Interface

Modern & colorful UI

Gradient backgrounds

Card-based layout

Clean UX for easy navigation

🛠 Tech Stack
Frontend

React

React Router DOM

Axios

CSS (Custom gradient UI)

Backend

Node.js

Express.js

SQLite

JSON Web Token (JWT)

bcryptjs

📂 Project Structure
course-management-app/
├── backend/
│   ├── db/
│   ├── middleware/
│   ├── routes/
│   ├── package.json
│   └── server.js
│
└── frontend/
    ├── public/
    ├── src/
    │   ├── components/
    │   ├── services/
    │   └── styles.css
    └── package.json

⚙️ How to Run the Project Locally
1️⃣ Clone the Repository
git clone https://github.com/manmohangithub/course-management-app.git
cd course-management-app

2️⃣ Run Backend
cd backend
npm install
npm start


Backend will run on:

http://localhost:5000

3️⃣ Run Frontend

Open a new terminal:

cd frontend
npm install
npm start


Frontend will run on:

http://localhost:3000

🔐 API Endpoints
Authentication
Method	Endpoint	Description
POST	/api/auth/register	Register a user
POST	/api/auth/login	Login user
Courses
Method	Endpoint	Description
POST	/api/courses	Create a course
GET	/api/courses	Fetch all courses
DELETE	/api/course/:id	Delete a course
🗄️ Database Design (SQLite)
Users Table

id (Primary Key)

name

email (Unique)

password (Hashed)

Courses Table

id (Primary Key)

name

description

instructor

📸 Screenshots

(Add screenshots here)

Login Page

Register Page

Dashboard

Course Listing

🌟 Highlights

Clean and scalable project structure

REST-compliant API design

Secure authentication mechanism

Beginner-friendly full-stack implementation

📝 Notes

No authentication UI framework used (pure React + CSS)

SQLite used for lightweight local storage

Project follows proper naming conventions and REST standards

👤 Author

Medapati Manmohan Reddy

GitHub: https://github.com/manmohangithub

📌 License

This project is created for educational and assignment purposes.
