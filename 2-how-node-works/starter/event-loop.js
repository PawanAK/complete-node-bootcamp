const fs = require("fs");
const crypto = require("crypto");

const start = Date.now();

process.env.UV_THREADPOOL_SIZE = 2;

setTimeout(() => console.log("time 1 finished"), 0);
setImmediate(() => console.log("the imediate 1 finished"));

fs.readFile("text-file.txt", () => {
  console.log("I/O finished");
  console.log("----------------------");

  setTimeout(() => console.log("time 2 finished"), 0);
  setTimeout(() => console.log("time 3 finished"), 3000);
  setImmediate(() => console.log("the imediate 2 finished"));

  process.nextTick(() => console.log("Procees.nextTick"));

  crypto.pbkdf2("password", "salt", 100000, 1024, "sha512", () => {
    console.log(Date.now() - start, "password encypted");
  });
  crypto.pbkdf2("password", "salt", 100000, 1024, "sha512", () => {
    console.log(Date.now() - start, "password encypted");
  });
  crypto.pbkdf2("password", "salt", 100000, 1024, "sha512", () => {
    console.log(Date.now() - start, "password encypted");
  });
  crypto.pbkdf2("password", "salt", 100000, 1024, "sha512", () => {
    console.log(Date.now() - start, "passwor encypted");
  });
});

console.log("top level code");
