const { readFile, writeFile } = require("fs");
// console.log(readFile);

//! ===========
//? readFile async approach
//! ===========

// readFile("../content/first.txt", "utf-8", (err, data) => {
//   if (err) {
//     return;
//   } else {
//     console.log(data);
//   }
// });

//! =============
//?  async / awite
//! =============

//* create a getText() function :-
const getText = (path) => {
  return new Promise((resolve, reject) => {
    readFile(path, "utf8", (err, data) => {
      if (err) {
        reject(err);
      } else {
        resolve(data);
      }
    });
  });
};

const start = async () => {
  try {
    const first = await getText("../content/first.txt", "utf8");
    //- const second = await getText("../content/second.txt", "utf8");
    //- console.log(first, second);
    console.log(first);
  } catch (error) {
    console.log(error);
  }
};
start();

//! =============
//? same thing promise chine
//! =============

// //* create a promise chine to see the value
// getText("../content/first.txt")
//   .then((result) => console.log(result))
//   .catch((err) => console.log(err));

//- const getAns = getText("../content/first.txt")
//-   .then((result) => result)
//-   .catch((err) => err);
//-   console.log(getAns); // Promise { <pending> }

// const start = async () => {
//   try {
//     const first = await readFile("../content/first.txt", "utf8");
//     const second = await readFile("../content/second.txt", "utf8");
//     // await writeFile(
//     //   "../content/result-mind-grenade.txt",
//     //   `THIS IS AWESOME : ${first} ${second}`
//     // );
//     console.log(first, second);
//   } catch (error) {
//     console.log(error);
//   }
// };

// start();
