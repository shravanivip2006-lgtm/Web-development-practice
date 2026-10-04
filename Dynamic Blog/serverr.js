const express = require("express");

const app = express();

const PORT = 3000;


// Middleware

app.use(express.json());


// Serve HTML, CSS and other frontend files

app.use(express.static(__dirname));


// Temporary storage for posts

let posts = [];


// --------------------------------
// GET ALL POSTS
// --------------------------------

app.get("/api/posts", (req, res) => {

    res.json(posts);

});


// --------------------------------
// POST NEW POST
// --------------------------------

app.post("/api/posts", (req, res) => {

    const { title, content } = req.body;


    // Validation

    if (!title || !content) {

        return res.status(400).json({
            message: "Title and content are required."
        });

    }


    // Create new post

    const newPost = {

        id: Date.now(),

        title: title,

        content: content,

        createdAt: new Date()

    };


    // Add post

    posts.unshift(newPost);


    // Send response

    res.status(201).json({

        message: "Post created successfully.",

        post: newPost

    });

});


// --------------------------------
// START SERVER
// --------------------------------

app.listen(PORT, () => {

    console.log(
        `Server running at http://localhost:${PORT}`
    );

});