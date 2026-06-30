# MVC Books API (In-Memory)

A simple RESTful API built with Node.js and Express to demonstrate the Model-View-Controller (MVC) architecture. This project uses an in-memory array for data storage and includes basic input validation and proper HTTP status codes.

## Architecture (MVC)
- **Model:** Manages the in-memory array and data logic (`models/bookModel.js`).
- **View:** The JSON payloads returned to the client.
- **Controller:** Handles request parsing, input validation, and HTTP responses (`controllers/bookController.js`).

## Prerequisites
- Node.js installed
- Postman (for API testing)

## Setup and Run
1. Clone this repository.
2. Run `npm install` to install Express.
3. Run `node app.js` to start the server on port 3000.

## API Endpoints

| Method | Endpoint | Description | Status Codes |
|---|---|---|---|
| GET | `/api/books` | Retrieves all books | 200 OK |
| GET | `/api/books/:id` | Retrieves a specific book by ID | 200 OK, 404 Not Found |
| POST | `/api/books` | Creates a new book | 201 Created, 400 Bad Request |
| PUT | `/api/books/:id` | Updates an existing book | 200 OK, 400 Bad Request, 404 Not Found |
| DELETE | `/api/books/:id` | Deletes a book by ID | 200 OK, 404 Not Found |

## Input Validation
- `POST /api/books` requires a JSON body with both `title` (string) and `author` (string).
- `PUT /api/books/:id` requires at least one field (`title` or `author`) to process an update.

