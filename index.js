const http = require('http'); // nuynna inch vor grenq import hhtp drom '/http/

const hostname = '127.0.0.1'; // hosty mer
const port = 3000; // lockalhost:3000

const server = http.createServer((req, res) => {
  res.statusCode = 200; // ka orinak error 404 page not found // karanq gooklov nayenq statuscode`
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello World');
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});