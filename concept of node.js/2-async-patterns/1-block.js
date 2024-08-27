const http = require("http");

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.end("Hello this is Home Page");
  }
  if (req.url === "about") {
    // blocking code
    for (let i = 0; i < 50; i++) {
      for (let j = 0; j < 100; j++) {
        console.log(`${i} ${j}`);
      }
    }
    res.end("About Page");
  }
  res.end("Error Page");
});

server.listen(5000, () => {
  console.log("Server listening on port : 5000....");
});
