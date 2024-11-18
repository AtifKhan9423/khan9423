var express = require('express');
var router = express.Router();

// Route for Home Page
router.get('/', function(req, res, next) {
  res.render('pages/home', { title: 'Home' });
});

// Route for About Me Page
router.get('/about', function(req, res, next) {
  res.render('pages/about', { title: 'About Me' });
});

// Route for Projects Page
router.get('/projects', function(req, res, next) {
  res.render('pages/projects', { title: 'Projects' });
});

// Route for Contact Me Page
router.get('/contact', function(req, res, next) {
  res.render('pages/contact', { title: 'Contact Me' });
});

module.exports = router;

