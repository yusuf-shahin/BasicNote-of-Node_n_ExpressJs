const path = require("path");

console.log(path.sep); //# ---> \

const filePath = path.join("/content/", "subfolder", "test.txt", "nft.txt");
//# "/content/" + "subfolder" + "test.txt" (join the path)
console.log(filePath); //# ---> \content\subfolder\test.txt\nft.txt
//? although nft.txt file dose not exist

const base = path.basename(filePath);
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
