/* index.js - Chloe Baker - 301062067 - October 8, 2020 */

var express = require('express');
var router = express.Router();

//Get home page
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Home' }); //render the index.ejs page
});

//Home page again incase someone types in /home
router.get('/home', function(req, res, next) {
  res.render('index', { title: 'Home' }); 
});

//About Me page
router.get('/about', function(req, res, next) {
  res.render('index', { title: 'About Me' }); 
});

//Products page
router.get('/projects', function(req, res, next) {
  res.render('index', { title: 'Projects' }); 
});

//Services page
router.get('/services', function(req, res, next) {
  res.render('index', { title: 'Services' }); 
});

//Contact Me page
router.get('/contact', function(req, res, next) {
  res.render('index', { title: 'Contact Me' }); 
});

module.exports = router;
