  // Setting up express environment
var express = require('express');
var app = express();

app.get('/hello-squirrel'. function(req, res){
  res.send('Hello Mr. Squirell')
});


app.listen(3000, function () {
  console.log('Example app listening on port localhost:3000!');
});
