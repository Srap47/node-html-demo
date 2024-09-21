var express = require('express')
var ejs = require('ejs')


var app = express();

app.use(express.static('public'));
app.set('view engine','ejs');

app.listen(8080);

// localhost:8080
app.get('/',function(req,res){

    res.render('pages/index');


});

app.get('/nature',function(req,res){
    res.render('pages/nature');
})

app.get('/the_world',function(req,res){
    res.render('pages/the_world')
})

app.get('/about',function(req,res){
    res.render('pages/about');
})

app.get('/contact',function(req,res){
    res.render('pages/contact');
})