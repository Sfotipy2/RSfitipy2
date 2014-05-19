var http = require('http');

function peticionServidor(req, res){
	console.log("Peticion al Server");
	res.writeHead(200,{"Content Type" : "text/html"});
	res.write("<h1>Server on node.js ...</h1>")
	res.end();
};

http.createServer(peticionServidor).listen(8085);

console.log("App running on http://localhost:%s", 8085);
