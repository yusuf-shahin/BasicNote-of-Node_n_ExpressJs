// const fs = require("fs");
// console.log(fs.readFileSync);

//* do the same thing by obj destructuring from "fs"
const { readFileSync, writeFileSync } = require("fs"); //# file-system
console.log(readFileSync);

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
console.log("done with this task");
console.log("starting the next one");

//? sync approach --> "start" --> {rading file --> "Hello this is first text file, Yusuf... :)" --> "Hello this is second text file , Shahin" --> writing file} --> "done with this task" --> "starting the next one"
