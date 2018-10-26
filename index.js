var express = require('express');
app = express();
port = process.env.PORT || 3000;

app.get('*', (req, res) => {
    res.send("req.params: " + JSON.stringify(req.params));
});

app.listen(port);


console.log('todo list RESTful API server started on: ' + port);