const http = require("http");

const server = http.createServer((req, res) => {
  console.log("request event");
  res.end("Hello World");
});

server.listen(5000, () => {
  console.log("Server listening on port : 5000....");
});

//* First time
// Server listening on port : 5000....
// request event
// request event
//! after every time relode the server
// request event
// request event
// request event
// request event
