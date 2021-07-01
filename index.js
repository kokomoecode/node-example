let lodash = require("lodash");

// const fixNames = (caps) => {
//   let result = caps;
//   result = result.toLowerCase();
//   result = lodash.upperFirst(result);
//   return result;
// };

let name = "david is smart";
let first = "robert went swimming";
let last = "beckham bends the ball";

name = lodash.startCase(name);

first = lodash.lowerCase(first);

last = lodash.upperCase(last);

console.log(name);
console.log(first);
console.log(last);

// use these functions from lodash:
// lowerCase();
// upperCase();
// startCase();
