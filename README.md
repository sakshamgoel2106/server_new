# creating a basic server 

A simple Express.js REST API for managing a list of students. Built as a learning project to demonstrate a clean Express setup with middleware, routing, controllers, logging, rate limiting, and centralized error handling.

## Project Structure

```
one/
├── server.js              # App entry point — Express setup, middleware, routes, error handler
├── studentRoutes.js       # Defines student-related routes (GET /, POST /, GET /error)
├── studentController.js   # Controller logic for students (in-memory data store)
├── logger.js              # Request logging middleware
├── errorHandler.js        # Global error-handling middleware
├── package.json           # Dependencies and npm scripts
├── package-lock.json      # Locked dependency tree
└── node_modules/          # Installed dependencies
```

## Prerequisites

- [Node.js](https://nodejs.org/) (v18+ recommended)
- npm (bundled with Node.js)

## Installation

Dependencies are already installed in `node_modules/`. If you need to reinstall:

```bash
npm install
```

## Running the Server

From inside the `one/` directory:

```bash
# Production
npm start

# Development (auto-restart on file changes)
npm run dev
```

The server starts on `http://localhost:5000` by default. To use a different port, set a `PORT` environment variable.

## API Endpoints

| Method | Path              | Description                                       |
| ------ | ----------------- | ------------------------------------------------- |
| GET    | `/students`       | Retrieve the list of students                     |
| POST   | `/students`       | Add a new student (requires `{ "name": "..." }`) |
| GET    | `/students/error` | Triggers a test 500 error to demo the error handler |

### Example: add a student

```bash
curl -X POST http://localhost:5000/students \
  -H "Content-Type: application/json" \
  -d '{"name": "Bob"}'
```

### Example: list students

```bash
curl http://localhost:5000/students
```

## Configuration

A `.env` file in the `one/` directory can override defaults. Currently supported:

| Variable | Default | Purpose        |
| -------- | ------- | -------------- |
| `PORT`   | `5000`  | Server port    |

Create a `.env` file:

```
PORT=5000
```

## Middleware

The app wires up the following middleware in order (`server.js`):

1. `cors()` — enable Cross-Origin Resource Sharing.
2. `express.json()` — parse JSON request bodies.
3. Custom `logger` — logs `METHOD URL` for every request.
4. `express-rate-limit` — limits each client to **5 requests per minute**.
5. Custom `errorHandler` — catches thrown errors and returns `{ success: false, message }` with status `500`.

## Notes

- Data is stored **in memory only** — restarting the server resets the student list.
- All errors thrown by controllers (synchronous or via `next(err)`) flow to the central `errorHandler`.
- Unknown routes return a 404 JSON response: `{ "message": "Route Not Found" }`.


