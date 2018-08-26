
var express = require('express');
var app = express();
var exphbs = require('express-handlebars');
var giphy = require('giphy-api')();


app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');


app.get('/', function (req, res) {
  giphy.search(req.query.term, function (err, response) {
    res.render('home', {gifs: response.data})
  })
});

app.listen(3000, function () {
  console.log('Giphy listening on port localhost:3000!');
});
