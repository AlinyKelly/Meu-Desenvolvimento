# Resolução da Lista de Exercício 2 - URI Judge Online

**UNIFOR - Universidade de Fortaleza**

**Curso** - Análise e Desenvolvimento de Sistemas 2021.1

**Disciplina** - RACIOCÍNIO LÓGICO E ALGORÍTMICO

**Professor** - Átila Brandão

-------------------------------------------------------------------------------------------


[Problema 1035 - Teste de Seleção 1](https://www.urionlinejudge.com.br/judge/pt/problems/view/1035)

**_Resolução_**

```
var input = require('fs').readFileSync('/dev/stdin', 'utf8');

const [A, B, C, D] = input.split(" ").map(item => parseInt(item));

if (B > C && D > A && C + D > A + B && C > 0 && D > 0 && A % 2 == 0) {
	console.log("Valores aceitos");
} else {
	console.log("Valores nao aceitos");
}
```

[Problema 1036 - Fórmula de Bhaskara](https://www.urionlinejudge.com.br/judge/pt/problems/view/1036)

**_Resolução_**

Resolução erro de 10% verificar

```
var input = require('fs').readFileSync('/dev/stdin', 'utf8');

const [A, B, C] = input.split(" ").map(item => parseFloat(item));
const X1;
const X2;
const delta = (B * B) - 4 * A * C;

if (delta < 0) {
	console.log("Impossível calcular");
} else {
	X1 = ( -B + Math.sqrt(delta)) / (2 * A);
	X2 = ( -B - Math.sqrt(delta)) / (2 * A);

	console.log("R1 = " + X1.toFixed(5));
	console.log("R2 = " + X2.toFixed(5));
}
}
```

[Problema 1037 - Intervalo](https://www.urionlinejudge.com.br/judge/pt/problems/view/1037)

**_Resolução_**

```
var input = require('fs').readFileSync('/dev/stdin', 'utf8');

const [valor] = input.split(" ").map(item => parseFloat(item));

if (valor < 0 || valor > 100) {
        console.log("Fora de intervalo");
    }
    else if (valor >= 0 && valor <= 25) {
        console.log("Intervalo [0,25]");
    }
    else if (valor > 25 && valor <= 50) {
        console.log("Intervalo (25,50]");
    }
    else if (valor > 50 && valor <= 75) {
        console.log("Intervalo (50,75]");
    }    
    else if (valor > 75 && valor <= 100) {
        console.log("Intervalo (75,100]");
    }        
    return 0;

```

[Problema 1038 - Lanche](https://www.urionlinejudge.com.br/judge/pt/problems/view/1038)

**_Resolução_**

```
var input = require('fs').readFileSync('/dev/stdin', 'utf8');

const [cod, quant] = input.split(" ").map(item => parseInt(item));

if(cod == 1){
	console.log("Total: R$ " + parseFloat(4.00*quant).toFixed(2));
} else if (cod == 2){
	console.log("Total: R$ " + parseFloat(4.50*quant).toFixed(2));
} else if (cod == 3){
	console.log("Total: R$ " + parseFloat(5.00*quant).toFixed(2));
} else if (cod == 4){
	console.log("Total: R$ " + parseFloat(2.00*quant).toFixed(2));
} else if (cod == 5){
	console.log("Total: R$ " + parseFloat(1.50*quant).toFixed(2));

	return 0;
}

```

[Problema 1040 - Média 3](https://www.urionlinejudge.com.br/judge/pt/problems/view/1040)

**_Resolução_**

```
var input = require('fs').readFileSync('/dev/stdin', 'utf8');

var [N1, N2, N3, N4, N5] = input.split(" ").map(item => parseFloat(item));

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


```

[Problema 1041 - Coordenadas de um Ponto](https://www.urionlinejudge.com.br/judge/pt/problems/view/1041)

**_Resolução_**

```

```

[Problema 1045 - Tipode de Triângulos](https://www.urionlinejudge.com.br/judge/pt/problems/view/1045)

**_Resolução_**

```

```

[Problema 1048 - Aumento de Salário](https://www.urionlinejudge.com.br/judge/pt/problems/view/1048)

**_Resolução_**

```

```

[Problema 1051 - Imposto de Renda](https://www.urionlinejudge.com.br/judge/pt/problems/view/1051)

**_Resolução_**

```

```