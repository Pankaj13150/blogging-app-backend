# Blogging App Backend

A RESTful API backend for a blogging application built with Node.js, Express, and MySQL.

## Features

- User authentication (register, login) with JWT
- CRUD operations for blog posts
- User-specific post management
- Secure password handling with bcrypt
- MySQL database integration

## Prerequisites

- Node.js
- MySQL server
- npm

## Installation

1. Clone the repository
2. Install dependencies:
   ```
   npm install
   ```
3. Create a MySQL database named `blog_db`
4. Set up environment variables by creating a `.env` file in the root directory with the following content:
   ```
   PORT=5000
   DB_HOST=localhost
   DB_USER=your_mysql_username
   DB_PASSWORD=your_mysql_password
   DB_NAME=blog_db
   JWT_SECRET=your_secure_jwt_secret_key
   ```
5. Create the required database tables:

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

## Running the Application

### Development Mode

```
npm run dev
```

### Production Mode

```
npm start
```

The server will run on http://localhost:5000 by default.

## API Endpoints

### Authentication

- `POST /api/users/register` - Register a new user
- `POST /api/users/login` - Login a user

### Posts

- `GET /api/posts` - Get all posts
- `GET /api/posts/:id` - Get a specific post
- `POST /api/posts` - Create a new post (requires authentication)
- `PUT /api/posts/:id` - Update a post (requires authentication)
- `DELETE /api/posts/:id` - Delete a post (requires authentication)
- `GET /api/users/:userId/posts` - Get all posts by a specific user

## Testing the API

You can test if the API is running by accessing:

```
GET /api/test
```

This should return a JSON response: `{ "message": "API is working!" }`
