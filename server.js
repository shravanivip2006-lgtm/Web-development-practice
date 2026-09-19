const express = require("express");

const app = express();

// Home route
app.get("/", (req, res) => {
    res.send("Hello from server");
});

// Date and time route
app.get("/datetime", (req, res) => {
    const now = new Date();
    res.send(`Current date and time: ${now}`);
});

// About route
app.get("/about", (req, res) => {
    res.send("This is my Express.js server.");
});

// Student route
app.get("/student", (req, res) => {
    res.send("Student Name: Shravani");
});

// Welcome route
app.get("/welcome", (req, res) => {
    res.send("Welcome to my website!");
});

// Contact route
app.get("/contact", (req, res) => {
    res.send("Contact: student@example.com");
});

// Start server
app.listen(3000, () => {
    console.log("Server running on http://localhost:3000");
});