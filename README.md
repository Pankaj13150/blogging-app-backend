# Blogging App Backend

A RESTful API backend for a blogging application built using Node.js, Express, and MySQL. The architecture follows a clean, modular structure with separate folders for configuration, routes, controllers, and middleware.

## 📦 Clone the Repository

```bash
git clone https://github.com/Pankaj13150/blogging-app-backend.git
```

## 📁 Project Structure

```
blogging-app-backend/
├── config/               # Database configuration
│   └── db.js
├── controllers/          # Business logic
│   ├── userController.js
│   └── postController.js
├── middleware/           # Middleware (e.g., JWT auth)
│   └── auth.js
├── routes/               # API routes
│   ├── userRoutes.js
│   ├── postRoutes.js
│   └── userPostRoutes.js
├── .env                  # Environment variables
├── index.js              # Entry point
├── package.json          # Dependencies and scripts
└── README.md             # Project documentation
```

## ✅ Prerequisites

Make sure the following are installed:

- Node.js
- MySQL
- npm

## ⚙️ Installation & Setup

1. **Navigate to the Project Directory**

```bash
cd /your/path/to/blogging-app-backend
```

2. **Install Dependencies**

```bash
npm install
```

3. **Set Up the MySQL Database**

Create a database named blog_db:

```sql
CREATE DATABASE blog_db;
```

4. **Configure Environment Variables**

Create a .env file in the root directory and add:

```ini
PORT=5000
DB_HOST=localhost
DB_USER=your_mysql_username
DB_PASSWORD=your_mysql_password
DB_NAME=blog_db
JWT_SECRET=your_secure_jwt_secret_key
```

5. **Create Required Tables**

Execute the following SQL in your MySQL server:

```sql
CREATE TABLE users (
  id INT AUTO_INCREMENT PRIMARY KEY,
  username VARCHAR(50) NOT NULL UNIQUE,
  email VARCHAR(100) NOT NULL UNIQUE,
  password VARCHAR(255) NOT NULL,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE posts (
  id INT AUTO_INCREMENT PRIMARY KEY,
  title VARCHAR(255) NOT NULL,
  content TEXT NOT NULL,
  user_id INT NOT NULL,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE
);
```

## 🚀 Running the Application

**Development Mode**

```bash
npm run dev
```

**Production Mode**

```bash
npm start
```

By default, the server runs at:
👉 http://localhost:5000

## 🧠 Codebase Overview

**index.js**
Sets up the Express server, connects to the database, configures middleware, and registers API routes.

**config/db.js**
Initializes a connection pool to the MySQL database using environment variables.

**middleware/auth.js**
Handles JWT-based authentication to secure protected routes.

**controllers/**
- **userController.js**: Handles registration and login logic.
- **postController.js**: Manages post CRUD (Create, Read, Update, Delete) operations.

**routes/**
- **userRoutes.js**: Routes for user authentication.
- **postRoutes.js**: Routes for general post operations.
- **userPostRoutes.js**: Routes for user-specific post access.

## 📡 API Endpoints

### 🧑‍💻 Authentication

| Method | Endpoint | Description |
|--------|----------|-------------|
| POST | /api/users/register | Register a new user |
| POST | /api/users/login | Authenticate a user |

### 📝 Posts

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | /api/posts | Get all posts |
| GET | /api/posts/:id | Get a specific post |
| POST | /api/posts | Create a post (requires auth) |
| PUT | /api/posts/:id | Update a post (requires auth) |
| DELETE | /api/posts/:id | Delete a post (requires auth) |
| GET | /api/users/:userId/posts | Get all posts by a specific user |
