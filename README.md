# DevPulse API

A role-based Issue Tracking REST API built with Express.js, TypeScript, PostgreSQL (NeonDB), and JWT Authentication.

---

## 🚀 Live Links

- Backend Live Link: _Add your deployed backend URL here_
- Frontend Live Link: _Add your frontend URL here_

---

# ✨ Features

- JWT Authentication & Authorization
- Role-based Access Control (Maintainer & Contributor)
- Create, Read, Update, Delete Issues
- Filter & Sort Issues
- PostgreSQL Database Integration using NeonDB
- Password Hashing with bcrypt
- Centralized Error Handling
- RESTful API Architecture
- TypeScript Support

---

# 🛠️ Technology Stack

- Node.js
- Express.js
- TypeScript
- PostgreSQL
- NeonDB
- JWT
- bcrypt
- dotenv
- cors

---

# 📦 Installation & Setup

## 1️⃣ Clone the Repository

git clone https://github.com/AlNahianFatin/devpulse.git
cd devpulse

2️⃣ Install Dependencies
npm install


3️⃣ Configure Environment Variables

Create a .env file in the root directory and add the following variables:

PORT=5000

DATABASE_URL=your_neondb_connection_string

JWT_ACCESS_SECRET=your_secret_key
JWT_ACCESS_EXPIRES_IN=7



🗄️ NeonDB PostgreSQL Setup

This project uses NeonDB as the PostgreSQL database provider.

Steps
Go to https://neon.tech
Create an account
Create a PostgreSQL project
Copy the connection string
Paste it into the .env file

Example:

DATABASE_URL=postgresql://username:password@ep-example.ap-southeast-1.aws.neon.tech/devpulse


▶️ Run the Project
Development Mode
npm run dev
Production Mode
npm run build
npm start


📌 API Endpoints
🔐 Authentication

Register User
POST /api/auth/register

Login User
POST /api/auth/login


🐞 Issues
Create Issue
POST /api/issues

Get All Issues
GET /api/issues

Get Single Issue
GET /api/issues/:id

Update Issue
PATCH /api/issues/:id

Delete Issue
DELETE /api/issues/:id



📁 Project Structure
src/
│
├── app/
│   ├── modules/
│   ├── middleware/
│   ├── routes/
│   ├── utility/
│   └── config/
│
├── app.ts
├── server.ts
└── db.ts


👥 User Roles
🛠️ Maintainer
Can manage all issues
Can update any issue
Can delete any issue

👨‍💻 Contributor
Can create issues
Can update only own issues when status is open
Cannot modify others' issues


⚠️ Error Handling

The application uses centralized error-handling middleware to manage:

Validation Errors
Authentication Errors
Authorization Errors
Database Errors
Internal Server Errors


📜 Available Scripts
npm run dev
npm run build
npm start


👨‍💻 Author
Al Nahian Fatin
GitHub: https://github.com/AlNahianFatin
🔗 Repository

GitHub Repository:
https://github.com/AlNahianFatin/devpulse
