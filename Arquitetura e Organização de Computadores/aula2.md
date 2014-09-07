#Sistemas para Representação de Dados

**Sistema Binário** Base 2: símbolos 0,1.

**Sistema Octal** Base 8: símbolos 0,1,2,3,4,5,6,7.

**Sistema Decimal** Base 10: símbolos 0,1,2,3,4,5,6,7,8,9.

**Sistema Hexadecimal** Base 16: símbolos 0,1,2,3,4,5,6,7,8,9,A,B,C,D,E,F.

##Tabela ASCII
Representação de caracteres em binário

1 caractere ocupa 8 bits = 1 byte

'João' = 4 bytes

|:1:|:1:| :1:| = 7 em decimal.

A conversão de um número binário para decimal acontece da direita para a esquerda parte inteira, e direita para a esquerda parte fracionária e aumentando o expoente do número 2 de acordo com as casas decimais.

então o exemplo acima para ser convertido devemos

|:2²:|:2¹:| :2⁰:| = 7 em decimal.

|:4:|:2:| :1:| = 7 em decimal.

##Teorema fundamental da numeração

x0b⁰ + x1b¹ + x2b²

x = digito (1,2 em binário por exemplo)

b = base (2 em binário por exemplo)

Número com casas decimais são calculados com o expoente negativo

(0,011)₂ = 0*2⁻¹ + 1*2⁻² + 1*2⁻³

(0,011)₂ = 0 + 1/4 + 1/8

(0,011)₂ = 0,375

##Conversão de Decimal para Binário por  Divisão Progressiva pela Base

Divisão do número pela base (2) o resultado é o mod da divisão(famoso resto) mais o último resultado ordenados ao contrário.

**Exemplo:**

(10)₁₀ = ?

10/2 = 5(mod = 0)

5/2 = 2 (mod = 1)

2/2 = 1 (mod = 0)

(10)₁₀ = 1010

##Recaptulando Conversões

Base 2 -> Base 10: Teorema Fundamental da Numeração

Base 10 -> Base 2: Divisão Progressiva por 2

##Parte fracionária Decimal para Binário

(12,75)₁₀ = (1100,11)₂ como?

Parte fracionária Multiplicação Sucessiva por 2

(até a obtenção de 1 sem frações)

0,75*2 = 1,5

0,5*2 = 1,0

A parte não fraciona dos resultados das multiplicações sucessivas são adicionadas na fração binária

Erro deve ser inferir a 2⁻¹⁰

##Soma e Subtração Binária

##Soma

0 + 0 = 0
0 + 1 = 1
1 + 0 = 1
1 + 1 = 1 (e vai 1)


  |1|0|0|1|1|1|
  |0|1|1|1|0|1|
|1|0|0|0|1|0|0|

(aconteceu overflow o que significa que precisamos de mais um bit para fazer essa soma)

Subtração

0 - 0 = 0
1 - 0 = 1
1 - 1 = =
0 - 1 = 1 (emprestado da próxima casa)

|1|0|1|1|0|1|
|0|1|0|0|1|1|
|0|1|1|0|1|0|







