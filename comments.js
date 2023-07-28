// Create Web server
// Run: node comments.js
// Test: http://localhost:3000/comments
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({
    extended: false
}));

app.use(bodyParser.json());

// Create a new comment
app.post('/comments', (req, res) => {
    const comment = req.body;
    console.log(comment);
    res.send('The comment is: ' + comment.comment);
});

// Start server
app.listen(port, () => console.log(`Server is listening on port ${port}!`));