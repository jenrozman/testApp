var express = require('express');
var router = express.Router();

var templateTypes = [
  { name: "Jade", usefulness : "sucky"},
  { name: "EJS", usefulness : "a little better"},
  { name: "Handlebars", usefulness : "awesomesauce"}
]
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('home', {
     title: 'Handlebars',
     //descriptor: "much better",
     //method: "easy",
     templates: templateTypes /*var name in the template*/
   });
});

module.exports = router;
