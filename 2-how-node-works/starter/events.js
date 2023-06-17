const eventEmitter = require("events");
const { EventEmitter } = require("stream");
const http = require("http");

class Sales extends EventEmitter {
  constructor() {
    super();
  }
}

const myEmitter = new Sales();

myEmitter.on("newSale", () => {
  console.log("there was a  new Sale");
});

myEmitter.on("newSale", () => {
  console.log("Pawan Ajjar");
});

myEmitter.on("newSale", (stock) => {
  console.log(`there are now ${stock} items`);
});

myEmitter.emit("newSale", 10);

/////////////////////////

const server = http.createServer();

server.on("request", (req, res) => {
  console.log("Request Received");
  console.log(req.url);
  res.end("request received");
});

server.on("request", (req, res) => {
  console.log("Another request ❤️");
});

server.on("close", () => {
  console.log("server Closed");
});

server.listen(8000, "127.0.0.1", () => {
  console.log("Waiting for request");
});
