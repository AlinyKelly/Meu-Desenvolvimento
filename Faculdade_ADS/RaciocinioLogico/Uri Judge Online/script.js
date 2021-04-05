var input = require("fs").readFileSync("stdin", "utf8");
var lines = input.split('\n');

var [salario] = lines.shift().split(" ").map(item => parseFloat(item));
var imposto = 0.00;
var taxa1, taxa2, taxa3 = 0.00;

        if (salario <= 2000) {
            console.log("Isento");
        } else {
            if (salario > 2000 && salario <= 3000) {
                taxa1 = salario - 2000;
                taxa1 = ((taxa1 * 8) / 100);
                imposto = taxa1;
            } else if (salario > 3000 && salario <= 4500) {
                taxa1 = salario - 2000;
                taxa2 = taxa1 - 1000;
                taxa1 -= taxa2;
                taxa1 = ((taxa1 * 8) / 100);
                taxa2 = ((taxa2 * 18) / 100);
                imposto = taxa2 + taxa1;
            } else {
                taxa1 = salario - 2000;
                taxa2 = taxa1 - 1000;
                taxa3 = taxa2 - 1500;
                taxa1 -= taxa2;
                taxa2 -= taxa3;
                taxa1 = ((taxa1 * 8) / 100);
                taxa2 = ((taxa2 * 18) / 100);
                taxa3 = ((taxa3 * 28) / 100);
                imposto = taxa3 + taxa2 + taxa1;
            }
            console.log("R$ " + imposto.toFixed(2));
        }