//Express Server Dependencies
var express = require('express');

//Initialize Express Application
var app = express();
var port = process.env.PORT || 8080;


//Message API Route
app.get('/message', function(req, res){
	res.json({message: 'To be Implemented!'});
});

//HTML Static File Route
app.use(express.static(__dirname + '/public'));

//HTML Server Start on port 8080
app.listen(port, function(){
	console.log('Server listening on port: ' + port);
})