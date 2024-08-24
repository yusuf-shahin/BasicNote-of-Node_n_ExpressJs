# Basic Notes of Node & Express JS .

- In this repository, I’ve documented my journey through learning Node.js and Express.js by compiling a comprehensive tutorial.

### The importent shortkey of Node :-

- GLOBALS === NO WINDOW !!!! There is no window object in node .
- **dirname - console.log(**dirname) -> path to current directory .
- **filename - console.log(**dirname) -> file name .
- require - function to use modules (CommonJS) .
- module - info about current module (file) .
- process - info about env where the program is being executed .

### Modules in node .

##### What is module ?

- Modules in Node.js allow you to encapsulate code into separate files, making it reusable and maintainable. Each module can export only what is necessary, keeping the rest private and hidden. This helps organize your code and reduces potential conflicts.
- Every file is module (by default) .

If we console.log(module), we find that is our terminal :-

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

- In module we receive "export" obj

##### How we use export in node ?

- First we create three basic js file

names.js

```js
// local
const secret = "SUPER SECRET";
// share
const john = "john";
const peter = "peter";

// console.log(module);

//* export the varible globaly by using obj...
module.exports = { john, peter };

// console.log(module.exports); --->
//# { john: 'john', peter: 'peter' }
```

utils.js

```js
//* defaault export
const hello = (name) => {
  console.log(`Hello there ${name}`);
};
export default module.exports = hello;

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
console.log(sayHello); //# [Function: sayHi]

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

- in nodejs we use require instead of import method .

## What is os module ?

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

##### path-module :-

- The Path module provides a way of working with directories and file paths.

```js
const path = require("path");

console.log(path.sep); //# ---> \

const filePath = path.join("/content/", "subfolder", "test.txt");
console.log(filePath); //# ---> \content\subfolder\test.txt

const base = path.basename(filePath);
console.log(base); //# ---> test.txt

const absolute = path.resolve(__dirname, "content", "subfolder", "test.txt");
console.log(absolute);
//# ---> C:\Users\DFIT\Desktop\Node Basics\concept of node.js\content\subfolder\test.txt
```

## Node.js as a File Server

#### The Node.js file system module allows you to work with the file system on your computer.

- To include the File System module, use the **require()** method:

Common use for the File System module:

- Read files
- Create files
- Update files
- Delete files
- Rename files

##### fs-sync approach

```js
//* destructuring from "fs" (sync)
const { readFileSync, writeFileSync } = require("fs"); //# file-system
console.log("start");

//* in "subfolder" I already create two files, first.txt and second.txt
const first = readFileSync("./content/first.txt", "utf8");
const second = readFileSync("./content/second.txt", "utf8");

//* read the file from those folder
console.log(first, second);

//* create a file and write text on it
writeFileSync(
  //# create the file on this path
  "./content/result-sync.txt",
  //# write text(value) on that file
  `Here is the result : ${first}, ${second}`,
  //# add --> Here is the result :
  { flag: "a" }
);
// console.log('done with this task')
// console.log('starting the next one')

//? sync approach --> "start" --> {rading file --> writing file} --> "done with this task" --> "starting the next one"
```
