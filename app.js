
  // importing needed external modules
var express = require('express');
var exphbs  = require('express-handlebars');
var http = require('http');
var app = express();

app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

app.use(express.static('public'));

  // The root route
app.get('/', function (request, res) {
  var queryString = request.query.term
  var term = encodeURIComponent(queryString); // encodes the search term requested
  var url = 'http://api.giphy.com/v1/gifs/search?q=' + term + '&api_key=dc6zaTOxFJmzC';

  http.get(url, function(response) {
    response.setEncoding('utf8');
    var dataToBeReturned = ''; // where the giphs data will are stored

    response.on('data', function(incomingData) {
      // Continuously update stream with data
      dataToBeReturned += incomingData;
    });

    response.on('end', function() {
      // Data reception is done, do whatever with it!
      var parsedDataFromAPI = JSON.parse(dataToBeReturned); // parses the JSON response data into desirable type(giphs in this case)
      res.render('home', {gifs: parsedDataFromAPI.data}) // updates the view

    });
  });

})

app.listen(3000, function () {
  console.log('Server Listening on Port 3000')
})
