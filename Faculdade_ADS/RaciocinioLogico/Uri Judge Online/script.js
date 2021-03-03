var input = require("fs").readFileSync("stdin", "utf8");

var [N1, N2, N3, N4]= input.split(" ").map(item => parseFloat(item));

var media = ((N1*2) + (N2*3) + (N3*4) + (N4*1)) / 10;
console.log("Media: " + media.toFixed(1));

if (media >= 7.0){
    console.log("Aluno aprovado.");

} else if (media >= 5.0 && media <= 6.9){
    console.log("Aluno em exame.");

    console.log("Nota do exame: " + N5);

    media = (media + N5) / 2;

    if (media >= 5.0){
        console.log("Aluno aprovado.");
    } else {
        console.log("Aluno reprovado.");
    }

    console.log("Media final: " + media.toFixed(1));
    
} else {
    console.log("Aluno reprovado.");
}