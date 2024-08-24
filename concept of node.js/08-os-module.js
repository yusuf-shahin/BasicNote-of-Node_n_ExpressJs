//* build in module in node.js
const os = require("os"); //# operating system
// console.log(os);

//* info about current user
const user = os.userInfo();
console.log(user); //! -->
// {
//   uid: -1,
//   gid: -1,
//   username: 'DFIT',
//   homedir: 'C:\\Users\\DFIT',
//   shell: null
// }

// // method returns the system uptime in seconds
console.log(`The System Uptime is ${os.uptime()} seconds`);

const currentOS = {
  name: os.type(),
  release: os.release(),
  totalMem: os.totalmem(),
  freeMem: os.freemem(),
};
console.log(currentOS);
