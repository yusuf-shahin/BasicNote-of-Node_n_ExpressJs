const path = require("path");

console.log(path.sep); //# ---> \

//* path.join()
const filePathJoin = path.join("/content/", "subfolder", "test.txt", "nft.txt");
//# "/content/" + "subfolder" + "test.txt" (join the path)
console.log(filePathJoin); //# ---> \content\subfolder\test.txt\nft.txt
//? although nft.txt file dose not exist

//* path.resolve()
const filePathResolve = path.resolve(
  "/content/",
  "subfolder",
  "test.txt",
  "nft.txt"
);
//# C:"/content/" + "subfolder" + "test.txt" (return the absolute path)
console.log(filePathResolve); //# ---> C:\content\subfolder\test.txt\nft.txt
//? although nft.txt file dose not exist

const base = path.basename(filePathJoin);
console.log(base); //# ---> nft.txt (last file of the path)

console.log(__dirname); //# C:\Users\DFIT\Desktop\Node Basics\concept of node.js (current dir)
console.log(__filename); //# C:\Users\DFIT\Desktop\Node Basics\concept of node.js\09-path-module.js (current dir + file name)

const absolute = path.resolve(
  __dirname,
  "content",
  "subfolder",
  "test.txt",
  "nft.txt"
);
console.log(absolute); //# ---> C:\Users\DFIT\Desktop\Node Basics\concept of node.js\content\subfolder\test.txt\nft.txt
