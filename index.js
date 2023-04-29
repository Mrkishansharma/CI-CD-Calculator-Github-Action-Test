
const crypto = require("crypto");

const process = require("process");

const operation = process.argv[2];

const a = +process.argv[3];
const b = +process.argv[4];

switch (operation) {
case "add":
    console.log(a + b);
    break;

case "sub":
    console.log(a - b);
    break;

case "mult":
    console.log(a * b);
    break;

case "divide":
    console.log(a / b);
    break;

case "sin":
    console.log(Math.sin(a));
    break;

case "cos":
    console.log(Math.cos(a));
    break;

case "tan":
    console.log(Math.tan(a));
    break;

case "random":

    if (a) {
        const data = crypto.randomBytes(a);
        console.log(data.toString("binary"));
    } else {
        console.log("Provide length for random number generation.");
    }
    break;
default:
    console.log("Invalid operation");
}
