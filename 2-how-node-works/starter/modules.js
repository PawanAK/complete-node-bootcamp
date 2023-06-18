// const C = require("./test-module-1");
// const calc1 = new C();

// console.log(calc1.add(2, 5));

const { add, multiply } = require("./test-module-2");
console.log(multiply(2, 5));
