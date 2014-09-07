#Operações Binárias

O objetivo é sempre utilizar a menor quantidade de recursos para efetuar uma operação por isso alguns métodos foram criados entre eles:

*Módulo e Sinal
*Complemento a 1
*Complemento a 2
*Excesso de 2 elevado a n - 1

##Módulo e sinal

O bit mais a esquerda é o de sinal. Em que 0 representa (+) e 1 representa (-). E os bits restantes representam o módulo do número.

10000001 = -1

##Complemento a 1

O bit a esquerda também representa o sinal.

Se ocorrer overflow o bit é somado ao resultado.

resultado de uma soma em apenas 8 bits.

110101010 = 10101011

##Complemento a 2

O bit a esquerda também representa o sinal.

Se ocorrer overflow o bit é somado ao resultado invertido (0 vira 1, 1 vira 0).

110101010 = 01010110

##Excesso de 2 elevado a n - 1

O valor corresponde ao número somado a um excesso que para o número de bits é dado pela fórmula 2 n-1

0,04 = 4*10⁻²




