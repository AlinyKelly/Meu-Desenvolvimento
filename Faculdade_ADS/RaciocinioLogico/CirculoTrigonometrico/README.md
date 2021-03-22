#Atividade Avaliativa - AV1

**Unifor - Universidade de Fortaleza**

**Disciplina:** Raciocinio Lógico

**Professor:** Átila Girão

**Aluna:** Aliny Kelly Ferreira de Sousa - Matrícula: 2116322

####Questão
**1 -** :computer: Faça um programa que receba a medida de um ângulo em graus. Considere os quadrantes da
trigonometria, calcule e mostre:

**a)** o quadrante em que se localiza esse ângulo.

**b)** para ângulo maiores que 360 graus, informar quantas voltas completas foram dadas e qual
o quadrante final.

**c)** para ângulos negativos menores que -360 graus, informar quantas voltas completas foram
dadas e qual o quadrante final. 

Sabendo-se que os quadrantes do círculo trigonométrico são:
Primeiro quadrante: 0º < x < 90º
Segundo quadrante: 90º < x < 180º
Terceiro quadrante: 180º < x < 270º
Quarto quadrante: 270º < x < 360º

####Testes
**Ângulos Positivos**
Qualquer ângulo maior que 360∘ possui um correspondente menor que 360∘.
Na prática, basta dividir o ângulo em questão por 360∘ e considerar o resto da divisão.

Teste 1: ângulos positivos maiores que 360∘
Entrada: 780º
780 / 360 = 2 e o resto é 60
Isso significa que o ângulo de 780∘ dá 2 voltas completas no ciclo e corresponde ao ângulo de 60∘.

Teste 2: ângulos positivos maiores que 360∘
Entrada: 2340∘
2340 / 360 = 6 e o resto é 180
O ângulo de 2340∘ dá 6 voltas completas e corresponde ao ângulo de 180∘.

**Ângulos Negativos**
Os ângulos negativos correspondem a giros no sentido horário do ciclo trigonométrico.
Além disso, cada ângulo negativo possui algum ângulo positivo congruente.
Considere um ângulo x que esteja entre −360∘ e  0∘ . O ângulo positivo congruente a x é x+360∘.
x→x+360∘
Se o ângulo negativo for muito grande (menor que −360∘), primeiro dividimos por 360∘ e depois somamos 360∘ ao resto.

Teste 3: ângulos negativos maiores que  −360∘ :
Entrada: −45∘
360 − 45 = 315

Teste 4: ângulos negativos menores que  −360∘ :
Entrada: -1020∘
1020 / 360 = 2 e o resto é 300
Então -300 + 360 = 60

**Ângulos entre 0∘ e 360∘**
Teste 5:
Entrada: 50∘
O ângulo 50∘ pertence ao Primeiro quadrante.

####Fonte de pesquisa:
[Matika](https://matika.com.br/trigonometria-no-ciclo-trigonometrico/o-ciclo-trigonometrico)
[Brasil Escola](https://brasilescola.uol.com.br/matematica/identificando-os-quadrantes-ciclo-trigonometrico.htm)
[Ajuda Matemática](http://www.ajudamatematica.com/viewtopic.php?f=109&t=12832)