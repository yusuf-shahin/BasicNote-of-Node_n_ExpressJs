# Basic Notes of Node & Express JS .
- In this repository, I’ve documented my journey through learning Node.js and Express.js by compiling a comprehensive tutorial.

### The importent shortkey of Node :-

- GLOBALS  === NO WINDOW !!!! There is no window object in node .
- __dirname  -  console.log(__dirname) -> path to current directory .
- __filename -  console.log(__dirname) -> file name .
- require    - function to use modules (CommonJS) .
- module     - info about current module (file) .
- process    - info about env where the program is being executed .

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
const secret = 'SUPER SECRET'
// share
const john = 'john'
const peter = 'peter'
```
utils.js
```js
const sayHi = (name) => {
  console.log(`Hello there ${name}`)
}
// export default
module.exports = sayHi
```
- alternative-flavor
```js
module.exports.items = ['item1', 'item2']
const person = {
  name: 'bob',
}

module.exports.singlePerson = person
```
- mind-grenade.js
```js
const num1 = 5
const num2 = 10

function addValues() {
  console.log(`the sum is : ${num1 + num2}`)
}

addValues()
``` 

- Then we create a modeles file and import them all :-

modules.js
```js
// "./" -> current dir

const names = require('./names')
const sayHi = require('./utils')
const data = require('./alternative-flavor')
require('./mind-grenade')
sayHi('susan')
sayHi(names.john)
sayHi(names.peter)
```
- in nodejs we use require instead of import method .


























