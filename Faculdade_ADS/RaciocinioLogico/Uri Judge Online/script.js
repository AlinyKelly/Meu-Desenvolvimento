var input = require("fs").readFileSync("stdin", "utf8");
var lines = input.split('\n');

var prompt = function(texto) { return lines.shift();};
var x = prompt("X");
var y = prompt("Y");

do {    
    if (x > y) {
        console.log("Decrescente");
        
    } else if (x < y) {
        console.log("Crescente");
        
    }
    break;
} while (x != y);
