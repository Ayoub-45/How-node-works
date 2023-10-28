const fs = require("fs");
const crypto = require("crypto");
const start = Date.now();

setTimeout(() => {
  console.log("Time 1 finished");
}, 0);
setImmediate(() => {
  console.log("Immediate 1 finished");
});
fs.readFile("text-file.txt", () => {
  console.log("Reading from the file");
  setTimeout(() => {
    console.log("Time 3 finished");
  }, 3000);
  process.nextTick(() => {
    console.log("Process next tick");
    crypto.pbkdf2("password", "salt", 100000, 1024, "sha512", () => {
      console.log(Date.now() - start, "Password encrypted");
    });
  });
});
console.log("Hello from the top-level code");
