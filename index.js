// index.js

//  import the crypto module
const {randomBytes} = require('crypto')


//  get a commands using process.argv
let [,,operation,a,b] = process.argv

// complete the  function

const sub = (a,b) => {
  console.log(a-b);
}

const mult = (a,b) => {
  console.log(a*b);
}


const divide = (a,b) => {
  console.log(a/b);
}

const sin = (a) => {
  console.log(Math.sin(a));
}

const cos = (a) => {
  console.log(Math.cos(a));
}

const tan = (a) => {
  console.log(Math.tan(a));
}

const random = (len) => {
  try {
    randomBytes(len, (err, data) => {
      if(err) throw err
      console.log(`${data.toString('binary')}`);
    })
  } catch (err) {
    console.error('Provide length for random number generation.');
  }
}


a = Number(a)
b = Number(b)

switch (operation) {
  case 'add':
    add(a,b)
    break

  case 'sub':
    sub(a,b)
    break

  case 'mult':
    mult(a,b)
    break

  case 'divide':
    divide(a,b)
    break

  case 'sin':
    sin(a)
    break

  case 'cos':
    cos(a)
    break

  case 'tan':
    tan(a)
    break

  case 'random':
    random(a)
    break
  

  default:
    console.log("Invalid operation");
}
