//Primeira Aula Matemática Discreta
var matematicaDiscreta = "matemática não continua" + "exemplo grafico com pontos não linha";

//Lógica Cálculo Proposicinal
var introducao = "Muitas demonstrações em matemática, em muitos algoritmos em computação usam expressões lógicas";

//Exemplo expressões lógicas
var expressão1 = "Se p então q";
var expressão2 = "Se P1 E P2 então q1 ou q2";

//é portanto necessário conhecer os casos os quais essas expressões tem valor falso
//ou verdadeiro, o que denominamos valor lógico de tais expressões

var proposicoesEProposicoesCompostas = "Uma proposição ou declaração é uma sentença que pode ser " +
                                       "verdadeira ou falsa mas não ambos."

var sentenca = "Uma frase ou expressao que fornesse um pensamento";

var exemplosDeSetenca = [
  "Paris fica na França (valor lógico verdadeiro)",
  "1 + 2 = 3 (valor lógico verdadeiro)",
  "3 + 3 = 4 (valor lógico falso)",
  "Londres fica na Dinamarca (valor lógico falso)",
  "X + 2 = 3 (sentença aberta não da pra atribuir valor verdadeiro ou falso)",
  "Faça seu dever de casa (falso não atribui variável booleana)",
  "X = 2 é solução de x2 = 9 (proposição falsa)"
];

//Muitas proposições são compostas isto é, formadas de sub proposições e vários conectivos

var exemplosProposicoesCompostas = [
  "Rosas são vermelhas e violetas são azuis (verdadeiro/falso, porque deu um rolo na sala porque existem outras cores de rosa)",
  "João é inteligente ou estudo muito(não consegue-se atribuir valor lógico)"
];

var operacoesLogicasBasicas = {
  "conjunção": {
    "palavras": "e",
    "notação":"p^q",
    "definição-um": "Quisquer duas proposições podem ser combinadas pela palavras 'e' para formar uma composição composta chamada de conjunção",
    "definição-dois": "Se p e q são verdadeiras p^q é verdadeira, caso contrário falsa"
  },
  "disjunção": {
    "palavras": "ou",
    "notação":"pvq",
    "definição-um": "Quisquer duas proposições podem ser combinadas pela palavras 'ou' para formar uma composição composta chamada de conjunção",
    "definição-dois": "Se p e q são falsas p^q é falsa, caso contrário verdadeira"
  },
  "negação":  {
    "palavras": "não",
    "notação": "¬p",
    "definição-um": "Dada qualquer proposição P, outras proposição denominada negação de p pode ser formada escrevendo 'não ocorre que' antes de P, ou se possivel inserindo a palavras não",
    "definição-dois": "Se p é verdade, então ¬p é falso, se p é falso ¬p é verdadeiro"
  },
};

//OBS as notações não são completamente padronizadas

var proposicoesTabelaVerdade = "A propriedade principal de uma proposição P(p,q..) é o seu valor lógico depender exclusivamente dos valores lógicos de suas variáveis"