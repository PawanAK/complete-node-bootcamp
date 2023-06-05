const fs = require("fs");
const http = require("http");

http.createServer((req, res) => {
  res.end("Hello from server");
});
