// CommonJS, every file is module (by default)
// Modules - Encapsulated Code (only share minimum)
const names = require("./04-names");
// console.log(names);
//# in console we found : { john: 'john', peter: 'peter' }
//* same thing in different way by obj distructuring :-
// const {john, peter} = require("./04-names");

const sayHello = require("./05-utils");
console.log(sayHello);

const data = require("./06-alternative-flavor");
// console.log(data);
//# { items: [ 'item1', 'item2' ], singlePerson: { name: 'bob' } }

// sayHi("susan");
// sayHi(names.john);
// sayHi(names.peter);

//* mind-grenede :-
// require("./07-mind-grenade"); //# the sum is : 15
//! What the reason ? we dont export the module from "./07-mind-grenade"... how can we find them ?

//? If we have a function inside of module that we invoke , that code will run , even though we dont assain it in a varible
