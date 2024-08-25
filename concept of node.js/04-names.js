// local
const secret = "SUPER SECRET";
// share
const john = "john";
const peter = "peter";

// console.log(module.exports); //# --> {}

module.exports = { john, peter };

// console.log(module.exports); --->
//# { john: 'john', peter: 'peter' }
