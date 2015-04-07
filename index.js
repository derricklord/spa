//Express Server Dependencies
var express = require('express');

//Initialize Express Application
var app = express();
var port = process.env.PORT || 8080;


//HTML Static File Route
app.use(express.static(__dirname + '/public'));

//HTML Server Start on port 8080
app.listen(port, function(){
	console.log('Server listening on port: ' + port);
})