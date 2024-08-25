// started operating system process
console.log("first");

//? setTimeOut is async , async func is ofloaded...

setTimeout(() => {
  console.log("second");
}, 0);
console.log("third");
// completed and exited operating system process

//? "first" --> "third" --> "second"
