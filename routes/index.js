var express = require('express');
var router = express.Router();

const templateTypes = [
  { name: "Jade", usefulness : "sucky"},
  { name: "EJS", usefulness : "a little better"},
  { name: "Handlebars", usefulness : "awesomesauce"}
]
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', {
     title: 'EJS',
     descriptor: "much better",
     method: "easy",
     templates: templateTypes /*var name in the template*/
   });
});

module.exports = router;
