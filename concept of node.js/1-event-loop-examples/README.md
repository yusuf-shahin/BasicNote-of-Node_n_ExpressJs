# Event Loop in node.js

#### What is Event Loop in node.js ?

- The event loop is what **allows Node.js to perform non-blocking I/O operations** — despite the fact that a single JavaScript thread is used by default — by offloading operations to the system kernel whenever possible.

- [_In details_](https://medium.com/@mmoshikoo/event-loop-in-nodejs-visualized-235867255e81)

##### 1-read-file.js

```js
const { readFile, writeFile } = require("fs");

console.log("started a first task");
// CHECK FILE PATH!!!!
readFile("../content/first.txt", "utf8", (err, result) => {
  if (err) {
    console.log(err);
    return;
  }
  console.log(result);
  console.log("completed first task");
});
console.log("starting next task");

//* in console we see :-
//? "started a first task" --> "starting next task" --> "completed first task"
```

##### 2-setTimeOut.js

```js
// started operating system process
console.log("first");

//? setTimeOut is async , async func is ofloaded...

setTimeout(() => {
  console.log("second");
}, 0);
console.log("third");
// completed and exited operating system process

//? "first" --> "third" --> "second"
```

##### 3-setInterval.js

```js
setInterval(() => {
  console.log("hello world");
}, 2000);
console.log(`I will run first`);
// process stays alive unless
// Kill Process CONTROL + C
// unexpected error

//? "I will run first"  --> "hello world" , "hello world" , "hello world"
```

##### 4-server.js

```js
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
```
