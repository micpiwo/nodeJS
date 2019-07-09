const http = require('http');
const port = 3000;
http.createServer((req, res) => {
 res.writeHead(200, {'Content-Type': 'text/html'});
 res.end('<h1 style="color:red; text-align:center; height:60px; background-color: green;">Hello World\n prend en compte les balise html et du css.</h1>');
}).listen(port)

console.log(`Server running at http://localhost:${port}/`);