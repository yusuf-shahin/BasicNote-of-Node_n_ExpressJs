# Basic Notes of node.js .

- In this repository, I’ve documented my journey through learning Node.js and Express.js by compiling a comprehensive tutorial.

**The importent shortkey of Node :-**

- GLOBALS === NO WINDOW !!!! There is no window object in node .
- **dirname - console.log(dirname)** -> path to current directory .
- **filename - console.log(dirname)** -> file name .
- require - function to use modules (CommonJS) .
- module - info about current module (file) .
- process - info about env where the program is being executed .

### Modules in node js :-

- **What are module ?**

- Modules in Node.js allow you to encapsulate code into separate files, making it reusable and maintainable. Each module can export only what is necessary, keeping the rest private and hidden. This helps organize your code and reduces potential conflicts.
- Every file is module (by default) .

- [Click this article to learn details](https://www.freecodecamp.org/news/what-are-node-modules/)

If we **console.log(module)** , we find that is our terminal :-

```js
{
  id: '.',
  path: 'C:\\Users\\DFIT\\Desktop\\jhon smilga\\node-express-course\\01-node-tutorial',
  exports: {},
  filename: 'C:\\Users\\DFIT\\Desktop\\jhon smilga\\node-express-course\\01-node-tutorial\\02-globals.js',
  loaded: false,
  children: [],
  paths: [
    extension...
  ]
}
```

- In module we receive _"export"_ as obj
- using **module.exports** we add the value of exports.
- using **require()** method to import the module as obj.
- _- in nodejs we use require instead of import method ._

**How we use local modules in node ?**

- First we create three basic js file

names.js

```js
// local
const secret = "SUPER SECRET";
// share
const john = "john";
const peter = "peter";

console.log(module.exports); //# --> {}

module.exports = { john, peter };

// console.log(module.exports); --->
//# { john: 'john', peter: 'peter' }
```

utils.js

```js
//* defaault export
// const hello = (name) => {
//   console.log(`Hello there ${name}`);
// };
// export default module.exports = hello;

//* same thing in different way
module.exports = (name) => {
  console.log(`Hello there ${name}`);
};
```

- alternative-flavor

```js
module.exports.items = ["item1", "item2"];
const person = {
  name: "bob",
};

module.exports.singlePerson = person;
```

- mind-grenade.js

```js
const num1 = 5;
const num2 = 10;

function addValues() {
  console.log(`the sum is : ${num1 + num2}`);
}

addValues();
```

- Then we create a modeles file and import them all :-

modules.js

```js
// "./" ---> current dir

// CommonJS, every file is module (by default)
// Modules - Encapsulated Code (only share minimum)
const names = require("./04-names");
// console.log(names);//#  { john: 'john', peter: 'peter' }

//* same thing in different way by obj distructuring :-
// const {john, peter} = require("./04-names");

const sayHello = require("./05-utils");
console.log(sayHello); //# //# [Function (anonymous)]

const data = require("./06-alternative-flavor");
// console.log(data);
//# { items: [ 'item1', 'item2' ], singlePerson: { name: 'bob' } }
const {
  items,
  singlePerson: { pName },
} = data;

sayHello("susan"); //# hello there susan
sayHello(names.john); //# hello there john
sayHello(pName); //# hello there bob

//* mind-grenede :-
// require("./07-mind-grenade"); //# the sum is : 15
//! What the reason ? we dont export the module from "./07-mind-grenade"... how can we find them ?

//? If we have a function inside of module that we invoke , that code will run , even though we dont assain it in a varible
```

### What is os module ?

##### **The node :** os module provides operating system-related utility methods and properties. It can be accessed using: import os from 'node:os'; const os = require('os'); copy.

```js
//* build in module in node.js
const os = require("os"); //# operating system
// console.log(os);

//* info about current user
const user = os.userInfo();
console.log(user); //! -->
// {
//   uid: -1,
//   gid: -1,
//   username: 'DFIT',
//   homedir: 'C:\\Users\\DFIT',
//   shell: null
// }

// // method returns the system uptime in seconds
console.log(`The System Uptime is ${os.uptime()} seconds`);

const currentOS = {
  name: os.type(),
  release: os.release(),
  totalMem: os.totalmem(),
  freeMem: os.freemem(),
};
console.log(currentOS);
```

### What is path-module ?

- The Path module provides a way of working with directories and file paths.
- [Click here to learn more](https://mirzaleka.medium.com/working-with-paths-in-node-js-447cd0f2ec56)

```js
const path = require("path");

console.log(path.sep); //# ---> \

const filePath = path.join("/content/", "subfolder", "test.txt", "nft.txt");
//# "/content/" + "subfolder" + "test.txt" (join the path)
console.log(filePath); //# ---> \content\subfolder\test.txt\nft.txt
//? although nft.txt file dose not exist

const base = path.basename(filePath);
console.log(base); //# ---> nft.txt (last file of the path)

console.log(__dirname); //# C:\Users\DFIT\Desktop\Node Basics\concept of node.js (current dir)
console.log(__filename); //# C:\Users\DFIT\Desktop\Node Basics\concept of node.js\09-path-module.js (current dir + file name)

const absolute = path.resolve(
  __dirname,
  "content",
  "subfolder",
  "test.txt",
  "nft.txt"
);
console.log(absolute); //# ---> C:\Users\DFIT\Desktop\Node Basics\concept of node.js\content\subfolder\test.txt\nft.txt
```

**Join Paths**
You can combine paths in one of two ways :

- `path.join()`
- `path.resolve()`

The difference between the two is that **path.resolve()** returns an absolute path, while **path.join()** just joins paths like strings.

```js
console.log("joinedPath :>> ", joinedPath);
// output: joinedPath :>>  ..\http\http.js

console.log("resolvedPath :>> ", resolvedPath);
// output: resolvedPath :>>  Root-Directory:\folder1\http\http.js
```

### What is "fs" module ?

- Node.js as a File Server ("fs") :-
- **The Node.js file system module allows you to work with the file system on your computer.**

- To include the File System module, use the **require()** method:

Common use for the File System module:

- Read files
- Create files
- Update files
- Delete files
- Rename files

**fs-sync approach :-**

- [What is Node JS fs.readFileSync() Method ?](https://www.geeksforgeeks.org/node-js-fs-readfilesync-method/)

```js
//* destructuring from "fs" (sync)
const { readFileSync, writeFileSync } = require("fs"); //# file-system
console.log("start");

//* in "subfolder" I already create two files, first.txt and second.txt
const first = readFileSync("./content/first.txt", "utf8");
const second = readFileSync("./content/second.txt", "utf8");
//# fs.readFileSync() method, we can synchronously read files. It is used to read the file and return its content.

//* read the file from those folder
console.log(first, second);

//* create a file and write text on it
writeFileSync(
  //# create the file on this path
  "./content/result-sync.txt",
  //# write text(value) on that file
  `Here is the result : ${first}, ${second}`
);
// console.log('done with this task')
// console.log('starting the next one')
```

- _sync approach --> "start" --> {rading file --> writing file} --> "done with this task" --> "starting the next one"_

**fs-async approach :-**

- [What is Node JS fs.readFile() Method ?](https://www.geeksforgeeks.org/node-js-fs-readfile-method/)

```js
//* destructuring from "fs" (async)
const { readFile, writeFile } = require("fs");

console.log("start");

//* async file in callBack
readFile("./content/first.txt", "utf8", (err, result) => {
  if (err) {
    console.log(err);
    return;
  }
  // console.log(result); //# result --> "./content/first.txt", "utf8"

  const first = result;

  //* callBack func inside callBack func :-
  readFile("./content/second.txt", "utf8", (err, result) => {
    if (err) {
      console.log(err);
      return;
    }
    const second = result;
    writeFile(
      "./content/result-async.txt",
      `Here is the result : ${first}, ${second}`,
      (err, result) => {
        if (err) {
          console.log(err);
          return;
        }
        console.log("done with this task");
      }
    );
  });
});
console.log("starting next task");
```

- _async approach --> "start" --> "starting next task" --> {rading file --> writing file} --> "done with this task"._

### What is HTTP module in node ?

- Node.js has a built-in module called HTTP, which allows Node.js to transfer data over the Hyper Text Transfer Protocol (HTTP).
- The HTTP module creates an HTTP server that listens to server ports and gives a response back to the client.

- [HTTP in details](https://mirzaleka.medium.com/a-detailed-look-into-the-node-js-http-module-680eb5e4548a)

```js
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
```

**_Creating Servers:_**

- The HTTP module allows you to create a server using the http.createServer() method, which listens for incoming requests and handles them using a callback function.

**_Handling Requests:_**

- You can handle HTTP requests and responses by accessing the request and response objects within the callback function of createServer(). The request object contains data from the client, while the response object is used to send data back.

**_url_**

- The URL module is part of the core modules of Nodejs. The URL module is used to splits up a web address into readable parts. The Url module and the query string in nodejs are used in manipulating the URL and its components.

- [Click this article to learn more](`https://www.freecodecamp.org/news/how-to-validate-urls-in-javascript/#:~:text=A%20Uniform%20Resource%20Locator%20(URL,of%20things%20on%20the%20internet.`)
