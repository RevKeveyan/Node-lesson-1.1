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

//git status // popoxutyun
//git add . - ete petq en bolory avelacvi ete voch fili liqy . - poxaen
//git commit -m"description" te inch enq arel
//git push

//git config --global user.name
//git config --global user.email

//branch - xoski main