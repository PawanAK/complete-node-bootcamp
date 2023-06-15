const fs = require("fs");

setTimeout(() => console.log("time 1 finished"), 0);
setImmediate(() => console.log("the imediate 1 finished"));

fs.readFile("text-file.txt", () => {
  console.log("I/O finished");

  setTimeout(() => console.log("time 2 finished"), 0);
  setImmediate(() => console.log("the imediate 2 finished"));
});

console.log("top level code");
