var express = require('express');
var app = express();

app.use('/static', express.static("public"));
app.set("view engine", "ejs")

app.get('/', function(req, res){
    res.render('todo.ejs');
})

app.listen(3000, function(){
    console.log('App listen on port 3000')
})