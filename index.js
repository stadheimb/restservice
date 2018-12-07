var express = require('express');
app = express();
port = process.env.PORT || 3000;

app.get('*', (req, res) => {
    console.log('request: ', req);
    res.send("req.params urg: " + JSON.stringify(req.params));
});

app.listen(port);


console.log('todo list RESTful API server started on: ' + port);
