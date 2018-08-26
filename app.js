
var express = require('express');
var app = express();
var exphbs = require('express-handlebars');
var http = require('http')

app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');


app.get('/', function (req, res) {
  console.log(req.query.term)
  var queryString = "Funny Cat";
    // ENCODE THE QUERY STRING TO REMOVE WHITE SPACES AND RESTRICTED CHARACTERS
  var term = encodeURIComponent(queryString);
  var url = 'http://api.giphy.com/v1/gifs/search?q=' + term + '&api_key=dc6zaT0xFJmzC'

  http.get(url, function(response) {
    response.setEncoding('utf8');

    var body = '';

    response.on('data', function(d) {
      body+= d;
    });
    response.on('end', function() {
      //WHEN DATA IS FULY RECEIVED, PARSE INTO JSON
      var parsedData = JSON.parse(body);
      res.render('home', {gifs: parsedData})
    });
  });
});

app.listen(3000, function () {
  console.log('Giphy listening on port localhost:3000!');
});
