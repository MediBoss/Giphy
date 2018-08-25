  // Setting up express environment
var express = require('express');
var app = express();
var exphbs = require('express-handlebars');

app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');


app.listen(3000, function () {
  console.log('Giphy listening on port localhost:3000!');
});
