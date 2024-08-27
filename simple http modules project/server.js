const http = require("http");

//? we get a obj by importing "fs" and we get "readFileSync" file by obj destructering.

const { readFileSync } = require("fs");

//? get all files
const homePage = readFileSync("./index.html");
const homeStyles = readFileSync("./styles.css");
const homeImage = readFileSync("./logo.svg");
const homeLogic = readFileSync("./app.js");

//# We must request all the file

const server = http.createServer((req, res) => {
  const url = req.url;

  //* to see the url path :-
  // console.log(url);

  //* home page
  if (url === "/") {
    //# "text/html"
    res.writeHead(200, { "content-type": "text/html" });
    res.write(homePage);
    res.end();
  }

  // //* styles
  else if (url === "/styles.css") {
    //# "text/css"
    res.writeHead(200, { "content-type": "text/css" });
    res.write(homeStyles);
    res.end();
  }

  // //* image/logo
  else if (url === "/logo.svg") {
    //# "image/svg+xml"
    res.writeHead(200, { "content-type": "image/svg+xml" });
    res.write(homeImage);
    res.end();
  }
  //* logic
  else if (url === "/app.js") {
    //# "text/javascript"
    res.writeHead(200, { "content-type": "text/javascript" });
    res.write(homeLogic);
    res.end();
  }

  //* 404
  else {
    //# "text/html"
    res.writeHead(404, { "content-type": "text/html" });
    res.write("<h1>page not found</h1>");
    res.end();
  }
});

server.listen(5000);
