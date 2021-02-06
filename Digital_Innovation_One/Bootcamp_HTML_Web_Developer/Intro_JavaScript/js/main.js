
//----------------AULA 1-------------------

//var nome = "Aliny Kelly";
//var idade = 31;
//var idade2 = 10;
//var n1 = 5;
//var n2 = 15;
//var frase = "Japão é o melhor time do mundo."
// alert(nome + " tem " + idade + " anos.");
//alert(idade + idade2);
//console.log(nome);
//console.log(n1 * n2);
//console.log(frase.toLocaleLowerCase());
//alert(frase.replace("Japão", "Brasil"));

//-----------------AULA 2--------------------

// ---------------- Array -------------------
/*
var lista = ["Maçã", "Pêra", "Uva"];
lista.push("Laranja"); //Inserir um elemento
lista.pop(); //Retira um elemento
console.log(lista[1]); //Exibi apenas um nome
console.log(lista); //Exibi a lista
console.log(lista.length); //Exibi a quantidade de elementos na lista
console.log(lista.reverse()); //Exibi os elementos de trás para frente
console.log(lista.toString());
console.log(lista.join(" - ")); //Muda a forma como os elementos são mostrados
*/

//-------------------Dicionário------------------
//Exemplo 1
/*
var fruta = {nome: "maçã", cor:"vermelha"}
console.log(fruta.nome);
alert(fruta.cor);

//Exemplo 2 - Lista de Dicionário
var frutas = [{nome: "maçã", cor:"vermelha"}, {nome: "uva", cor:"roxa"}]
console.log(fruta);
alert(frutas[1].nome);
*/

//-----------------AULA 3--------------------

/*var idade = prompt("Qual a sua idade?");
if (idade >=18){
    alert("Maior de idade");
}else {
    alert("Menor de idade.")
}

// Laço de repetição While

var count = 5;
while (count < 5){
    console.log(count);
    count = count + 1;
}

// Laço de repetição For
var count;
for(count=1; count <= 5; count++ ){
    alert(count);
}

// Datas
var d = new Date();
alert(d.getDate());
alert(d.getHours());
alert(d.getMinutes());
*/

//----------------------------------AULA 3---------------------
//----EXEMPLO 1-----
/*
function soma(n1, n2){
    return n1 + n2;
}
alert (soma(5, 10));
*/

//----EXEMPLO 2-----
//function setReplace (frase, nome, novo_nome){
//   return frase.replace(nome, novo_nome)
//}
//alert(setReplace("Vai Japão", "Japâo", "Brasil"));

//----EXEMPLO 3-----
var validar = 0;
function validaIdade(idade){
    if (idade >= 18){
        validar = true
    } else{
        validar = false
    }
    return validar;
}
var idade = prompt("Qual sua idade?");
validaIdade(idade)
console.log(validar);