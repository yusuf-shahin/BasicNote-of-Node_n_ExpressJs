//* Base module
const http = require("http");

const server = http.createServer((req, res) => {
  //# create my first server...
  // res.write("Welcome, this is my first web page by using node");
  // res.end();
  //# routing different different by page in server...
  if (req.url === "/") {
    res.end("Welcome to our home page");
  } else if (req.url === "/about") {
    res.end("Hello my name is yusuf Shahin");
  } else if (req.url === "/address") {
    res.end("9 no. Nobipur union, Senbag, Noakhali");
  } else {
    //! if url are wrong...
    res.end(`
    <h1>Oops!</h1>
    <p>We can't seem to find the page you are looking for</p>
    <a href="/">back home</a>
    `);
  }
});

server.listen(1997);
// http://localhost:1997/
