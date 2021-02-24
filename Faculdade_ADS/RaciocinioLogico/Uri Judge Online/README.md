# Resolução das Lista de Exercício 2 - URI Judge Online

**UNIFOR - Universidade de Fortaleza**

**Curso** - Análise e Desenvolvimento de Sistemas 2021.1

**Disciplina** - RACIOCÍNIO LÓGICO E ALGORÍTMICO

**Professor** - Átila Brandão




###[Problema 1035 - Teste de Seleção 1](https://www.urionlinejudge.com.br/judge/pt/problems/view/1035)

**Resolução**

```
var input = require('fs').readFileSync('/dev/stdin', 'utf8');

const [A, B, C, D] = input.split(" ").map(item => parseInt(item));

if (B > C && D > A && C + D > A + B && C > 0 && D > 0 && A % 2 == 0) {
	console.log("Valores aceitos");
} else {
	console.log("Valores nao aceitos");
}
```




