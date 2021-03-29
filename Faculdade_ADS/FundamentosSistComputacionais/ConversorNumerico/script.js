function enviar() {
    /*
     * O seguinte script irá converter um número com base decimal, para valores de base até 36,
     * podendo ser expandido criando-se novos valores na variável novabase.
     */
    var numero = document.getElementById("numero").value;
    var baseEntrada = document.getElementById("base").value;
    var baseNova = [];
    var contador = -1;
    var novabase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
    
    /*
    * Utilizando o for para criar um loop e fazer a conversão
    * a variavél i receberá o número de entrada, enquanto o 0 for menor que i,
    * i receberá o resultado da divisão exata de i pela base de entrada.
    */
    for (i = numero; 0 < i; i = Math.floor(i / baseEntrada)) {
        if(i % baseEntrada >= 10) { //verifica se o resto da divisão de i pela base de entrada é >= 10
            baseNova.push(novabase[i % baseEntrada - 10]); // se for, será inserido no array baseNova, o simbolo referente ao numero. Exemplo: 10 = A, 11 = B etc.
        } else { 
            baseNova.push(i % baseEntrada); // se não, irá retornar o valor do resto da divisão de i pela base de entrada.
        } 
        contador = contador + 1;
    } 
    for (j = contador; j >= 0; j--) {
        document.write(baseNova[j]); // retorna o resultado da conversão.

        //document.getElementById("resultado").innerHTML = baseNova[j];

    }
  };