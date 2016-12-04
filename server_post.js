var express = require('express');
var app = express();
var mongoose = require('mongoose');
var mongodburl = 'mongodb://tkcjonny:xiao5354@ds111788.mlab.com:11788/restaurant';
var restSchema = require('./models/restaurant');
var bodyParser = require('body-parser');

app.set('view engine','ejs');
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());
app.use(express.static(__dirname+'/public'));

app.get('/',function(req,res){
	res.sendFile(__dirname + '/public/index.html');
});
