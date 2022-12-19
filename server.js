var express = require('express');
var app = express();

app.get('/', function(req,res){
    res.sendFile(__dirname + '/public');
})

app.listen(8080);

app.use(express.static('public'));