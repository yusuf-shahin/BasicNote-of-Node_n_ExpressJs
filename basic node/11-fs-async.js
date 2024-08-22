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

//? async approach  --> "start" --> "starting next task" --> "done with this task"
