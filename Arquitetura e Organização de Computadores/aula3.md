#Conversão entre Bases

##Base Octal

(106)₈ = (?)₁₀

Usando o Teorema Fundamental da Numeração

6*8⁰ + 0*8¹ + 1*8² = 70

(106)₈ = (70)₁₀

Para converter Decimal em Octal a divisão progressiva pela base também vale:

70/8 = 8 (mod = 6)
8/8 = 8 (mod = 0, resultado = 1)

então

(70)₁₀ = (106)₈

Conversão de base binária para octal. Agrupar bits de 3 em 3 da direta para a esquerda e converte-los para decimal

Exemplo

(01 100 110)₂ = (146)₈

1  4  6 = (146)₈

##Base Hexadecimal

(A03)₁₆ = (?)₂

1003/2 = 501 (mod = 1)
501/2 = 250 (mod = 1)
250/2 = 125 (mod = 0)
125/2 = 62 (mod = 1)
62/2 = 31 (mod = 0)
31/2 = 15 (mod = 1)
15/2 = 7 (mod = 1)
7/2 = 3 (mod = 1)
3/2 = 1 (mod = 1)

(A03)₁₆ = (1111101011)₂

