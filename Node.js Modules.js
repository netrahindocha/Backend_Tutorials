const fs = require("fs");
let text = fs.readFileSync("textread.txt", "utf-8");

// Replace the content of the text file
text = text.replace("fs.read", "fs.readFileSync");
console.log("The content of the file is");
console.log(text);

console.log("Creating a new file...");
fs.writeFileSync("textread&write.txt", text);