var input = require("fs").readFileSync("stdin", "utf8");
var lines = input.split('\n');

var [senha] = lines.shift().split(" ").map(item => parseInt(item));
senha = 1;

while(senha != 2002){
    if(senha == 2002){
        console.log("Acesso Permitido");
        return 0;
    }else{
        console.log("Senha Invalida");
    }
}
return 0;