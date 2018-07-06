var http = require('http');
http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/html'});
  res.end('<html><body>Hello universe</body></html>\n')
}).listen(8000, '127.0.0.1');
console.log('Server running at http://127.0.0.1:8000/');
