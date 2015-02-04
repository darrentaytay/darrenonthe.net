var express = require('express');
var app     = express();

app.use('/static', express.static(__dirname + '/static'));

app.get('/', function(req, res){
    res.render('index.jade');
});

var server = app.listen(3000, function () {

  var host = server.address().address
  var port = server.address().port

  console.log('Server started, listening at http://%s:%s', host, port);

})