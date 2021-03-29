# Resolução da Lista de Exercício 4 - Repetições - URI Judge Online

**UNIFOR - Universidade de Fortaleza**

**Curso** - Análise e Desenvolvimento de Sistemas 2021.1

**Disciplina** - RACIOCÍNIO LÓGICO E ALGORÍTMICO

**Professor** - Átila Brandão

1074, 1075, 1078, 1079, 1113, 1114, 1115, 1116, 1117, 1118, 1133, 1142
------------------------------------------------------------------------------------------

[Problema 1059 - Números Pares](https://www.urionlinejudge.com.br/judge/pt/problems/view/1059)

**_Resolução_**

```
var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

for (var i = 1; i <= 100; i++) {
    if (i % 2 == 0) console.log(i);
}
```

[Problema 1067 - Números Ímpares](https://www.urionlinejudge.com.br/judge/pt/problems/view/1067)

**_Resolução_**

```
var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

var [X] = lines.shift().split(" ").map(item => parseInt(item));
var i;

i = 1;
while(i <= X){
    if(i%2 != 0){
        console.log(i);
    }
    i++;
}
```

[Problema 1070 - Seis Números Ímpares](https://www.urionlinejudge.com.br/judge/pt/problems/view/1070)

**_Resolução_**

```
var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

var [X] = lines.shift().split(" ").map(item => parseInt(item));

var impar;

impar = 0;
while(impar < 6){
    if(X%2 != 0){
        console.log(X);
        impar++;
    }
    X++;
}
```

[Problema 1073 - Quadrado de Pares](https://www.urionlinejudge.com.br/judge/pt/problems/view/1073)

**_Resolução_**

```
var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

var [N] = lines.shift().split(" ").map(item => parseInt(item));
var i;

for(i = 1; i <= N; i++){
    if (i%2 == 0){
        console.log(i + "^2 = " + i*i)
    }
}
```

[Problema 1074 - Par ou Ímpar](https://www.urionlinejudge.com.br/judge/pt/problems/view/1074)

**_Resolução_**

```
var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

var [N] = lines.shift().split(" ").map(item => parseInt(item));
var parity = "";
var signal = "";
var i;

for(i = 0; i < N; i++){
    let [X] = lines.shift().split(" ").map(item => parseInt(item));
   if(X%2==0){
       parity = "EVEN";
   }else{
       parity = "ODD";
   }

   if(X>0){
       signal = "POSITIVE";
   }
   if(X<0){
       signal = "NEGATIVE";
   }

   if(X==0){
       console.log("NULL");
   }else{
       console.log(parity + " " + signal);
   }
}
```

[Problema 1075 - Resto 2](https://www.urionlinejudge.com.br/judge/pt/problems/view/1075)

**_Resolução_**

```
var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

var [N] = lines.shift().split(" ").map(item => parseInt(item));
var i;

for (i=1; i<10000; i++){
    if(i%N == 2){
        console.log(i);
    }
}
```

[Problema 1078 - Tabuada](https://www.urionlinejudge.com.br/judge/pt/problems/view/1078)

**_Resolução_**

```
var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

var [N] = lines.shift().split(" ").map(item => parseInt(item));
var i;

for (i=1; i<=10; i++){
    produto = i * N;
        console.log(i + " x " + N + " = " + produto);
}
```

[Problema 1079 - Médias Ponderadas](https://www.urionlinejudge.com.br/judge/pt/problems/view/1079)

**_Resolução_**

```
var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

var [valor] = lines.shift().split(" ").map(item => parseInt(item));
var i;

for (i=1; i<=valor; i++){
    let [N1, N2, N3] = lines.shift().split(" ").map(item => parseFloat(item));
    let media = ((N1 * 2.0) + (N2 * 3.0) + (N3 * 5.0))/10;
    console.log(media.toFixed(1));    
}
return 0;
```

[Problema 1113 - Crescente e Decrescente](https://www.urionlinejudge.com.br/judge/pt/problems/view/1113)

**_Resolução_**

```
```

[Problema 1075 - Resto 2](https://www.urionlinejudge.com.br/judge/pt/problems/view/1075)

**_Resolução_**

```
```

[Problema 1075 - Resto 2](https://www.urionlinejudge.com.br/judge/pt/problems/view/1075)

**_Resolução_**

```
```

[Problema 1075 - Resto 2](https://www.urionlinejudge.com.br/judge/pt/problems/view/1075)

**_Resolução_**

```
```

[Problema 1075 - Resto 2](https://www.urionlinejudge.com.br/judge/pt/problems/view/1075)

**_Resolução_**

```
```

[Problema 1075 - Resto 2](https://www.urionlinejudge.com.br/judge/pt/problems/view/1075)

**_Resolução_**

```
```
