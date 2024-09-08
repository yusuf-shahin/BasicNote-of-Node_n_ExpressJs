// CommonJS, every file is module (by default)
// Modules - Encapsulated Code (only share minimum)

const names = require("./04-names");
// console.log(names);//#  { john: 'john', peter: 'peter' }
//? same thing in different way by obj distructuring :-
// const {john, peter} = require("./04-names");

const sayHello = require("./05-utils");
// console.log(sayHello); //# [Function (anonymous)]

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
