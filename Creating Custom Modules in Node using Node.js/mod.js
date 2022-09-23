console.log("This is module");

function average(arr){
    let sum = 0;
    arr.forEach((element) => {
        sum += element;
    })
    return sum/arr.length;
}

// In order to export a module
// module.exports = average;

// In order to export multiple modules, we can create an object
// module.exports = {
//     avg: average,
//     name: "Netra",
//     repo: "GitHub" 
// }

// Another way to fetch the data is

module.exports.name = "Nitara";