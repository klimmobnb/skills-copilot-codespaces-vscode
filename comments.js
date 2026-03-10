// Create web server
var express = require('express');   
var app = express();

// Create route for comments
app.get('/comments', function(req, res) {
    res.send('Comments');
});

// Start server
app.listen(3000, function() {
    console.log('Server started on port 3000');
}); 
