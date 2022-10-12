var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Portfolio | Home' });
});

/* GET about page */
router.get('/about', (req,res)=>{
  res.render('about', { title: 'Portfolio | About' })
});

/* GET projects page */
router.get('/projects', (req,res)=>{
  res.render('projects', { title: 'Portfolio | Projects' })
});

/* GET contact page */
router.get('/contact', (req,res)=>{
  res.render('contact', { title: 'Portfolio | Contact' })
});

module.exports = router;
