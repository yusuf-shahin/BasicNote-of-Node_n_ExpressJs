console.log("Welcome to Node Tutorial");

//? Test lodash

const lodash = require("lodash");
const itemArray = [1, 2, 3, [4, 5, [6, 7, [8]]]];
const newItenArray = lodash.flattenDeep(itemArray);
console.log(newItenArray);
