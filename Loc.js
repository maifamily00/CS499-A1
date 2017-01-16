var http = require('http'),
	express = require('express'),
	path = require('path');
	
var app = express();
app.set('port', process.env.PORT || 3000);
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', function (req, res) {
	res.send('<html><body><h1>Hello! My name is Loc!</h1><p1>I like to eat, sleep, dance, and play games.</p1><br><p2>I am a 5th year Computer Science student at California State Polytechnic Universisty, Pomona</p2><br><p3>Nice to meet you!</p3></body></html>');
	});
	
http.createServer(app).listen(app.get('port'),  function(){
	console.log('Express server listening on port ' + app.get('port'));
	});