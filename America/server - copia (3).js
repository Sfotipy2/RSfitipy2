var serverExpress = require('express');

var app = serverExpress();

app.get('/', function(req, res){
	res.sendfile(__dirname + '/index.html')
})

app.listen(8085);

console.log("App running on http://localhost:%s", 8085);
