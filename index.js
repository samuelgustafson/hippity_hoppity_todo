var express = require('express');
var server = express();
var port = process.env.PORT || 8080;

//to sercer css, images, and js
server.use(express.static(__dirname + '/public'));

server.use('/', function(request, response){
 response.sendFile('index.html', {root: __dirname + '/public/html'});
});

server.listen(port, function(){
  console.log('Now listening on port...', port);
});
