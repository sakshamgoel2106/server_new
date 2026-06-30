require("dotenv").config();

const express = require("express");
const cors = require("cors");
const rateLimit = require("express-rate-limit");

const studentRoutes = require("./studentRoutes");
const logger = require("./logger");
const errorHandler = require("./errorHandler");

const app = express();

// Middleware
app.use(cors());
app.use(express.json());
app.use(logger);

// Rate Limiter
const limiter = rateLimit({
    windowMs: 1 * 60 * 1000,
    max: 5,
    message: "Too many requests. Try again later."
});

app.use(limiter);

// Routes
app.use("/students", studentRoutes);

// 404 Route
app.use((req, res) => {
    res.status(404).json({
        message: "Route Not Found"
    });
});

// Global Error Handler
app.use(errorHandler);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});