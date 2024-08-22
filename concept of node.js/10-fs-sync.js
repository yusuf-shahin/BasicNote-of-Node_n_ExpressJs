//* destructuring from "fs" (sync)
const { readFileSync, writeFileSync } = require("fs"); //# file-system
console.log("start");

//* gra the text value from "subfolder" where I already create first.txt and second.txt
const first = readFileSync("./content/first.txt", "utf8");
const second = readFileSync("./content/second.txt", "utf8");

// console.log(first, second);

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
