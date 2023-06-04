const fs = require("fs");

const textIn = fs.readFileSync("./txt/input.txt", "utf8");

const textOut = `This is not a great way to understand this is a great way to learn ${Date.now()}`;

fs.writeFileSync("./txt/output.txt", textOut);
console.log("file Written");
