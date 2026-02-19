const http = require('http');

const hostname = '0.0.0.0';
const port = '5039';

const server = http.createServer((req, res) => {
	// Set Common Header
	res.setHeader('Content-Type', 'text/html');
	
	switch(req.url) {
		case '/':
			res.statusCode = 200;
			res.end('<h1>Home Page</h1>');
			break;
		case '/about':
			res.statusCode = 200;
			res.end('<h1>About Page</h1>');
			break;
		case '/api/data':
			if(req.method === 'GET'){
				res.writeHead(200, { 'Content-Type': 'application/json' });
				res.end(JSON.stringify({ message: "Hello from Router." }));
			}
			break;
		default:
			res.statusCode = 404;
			res.end('<h1>404 Not Found</h1>');
			break;
	}
});

server.listen(port, hostname, () => {
	console.log(`Server running at http://${hostname}:${port}`);
});
