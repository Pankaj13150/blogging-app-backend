# Blogging App Backend

A RESTful API backend for a blogging application built with Node.js, Express, and MySQL, featuring a modular architecture with separate folders for routes, controllers, and middleware.

## Features

- User authentication (register, login) with JWT
- CRUD operations for blog posts
- User-specific post management
- Secure password handling with bcrypt
- MySQL database integration
- Modular code structure for better maintainability

## Project Structure

```
├── config/             # Configuration files
│   └── db.js           # Database connection setup
├── controllers/        # Business logic
│   ├── userController.js  # User-related logic
│   └── postController.js  # Post-related logic
├── middleware/         # Middleware functions
│   └── auth.js         # Authentication middleware
├── routes/             # API routes
│   ├── userRoutes.js   # User authentication routes
│   ├── postRoutes.js   # Blog post CRUD routes
│   └── userPostRoutes.js  # User-specific post routes
├── .env                # Environment variables
├── index.js            # Main application entry point
├── package.json        # Project dependencies
└── README.md           # Project documentation
```

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

## Understanding the Codebase

### Step 1: Entry Point (index.js)

The main file sets up the Express server, loads middleware, and registers routes.

### Step 2: Database Configuration (config/db.js)

Handles MySQL connection setup and provides a connection pool for the application.

### Step 3: Authentication Middleware (middleware/auth.js)

Implements JWT-based authentication to protect routes that require user login.

### Step 4: Controllers

- **userController.js**: Handles user registration and login logic
- **postController.js**: Manages blog post creation, retrieval, updating, and deletion

### Step 5: Routes

- **userRoutes.js**: Defines endpoints for user authentication
- **postRoutes.js**: Defines endpoints for blog post CRUD operations
- **userPostRoutes.js**: Defines endpoints for user-specific post operations

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

## Debugging

For debugging the application, you can use the following methods:

1. **Console Logging**: The application uses strategic console.log statements

2. **Node.js Debugger**: Run the application in debug mode
   ```
   npm run debug
   ```
   Then connect using Chrome DevTools (navigate to chrome://inspect)

3. **Debugging with Breakpoints**: Use the `debug-brk` script
   ```
   npm run debug-brk
   ```
