// const average = require("./mod");
// console.log(average([3, 4]));

console.log("This is index.js");

// After creating an object to export multiple modules:
// const mod = require("./mod");
// console.log(mod.avg([3, 4]));
// console.log(mod.name);
// console.log(mod.repo);

// Another way to fetch the data is:
const mod = require("./mod");
console.log(mod); // { name: 'Nitara' }
console.log(mod.name); // Nitara
