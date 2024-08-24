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
  `Here is the result : ${first}, ${second}`
);
// console.log('done with this task')
// console.log('starting the next one')

//? sync approach --> "start" --> {rading file --> writing file} --> "done with this task" --> "starting the next one"
