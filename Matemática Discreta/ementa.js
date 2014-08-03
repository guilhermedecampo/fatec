//Ementa da matéria Matemática Discreta

var materias = [
  "Introdução à Lógica",
  "Introdução à Teoria dos Conjuntos",
  "Indução Matemática",
  "Relações e funções",
  "Análise Combinatória",
];

var MaterialProva1 = _.filter(materias, function (item, index) {
  return index <= 2;
});


var Prova1 = {
  MaterialProva1: MaterialProva1,
  data: Final de Setembro
};

var MaterialProva2 = _.filter(materias, function (item, index) {
  return index >= 2;
});


var Prova2 = {
  MaterialProva1: MaterialProva2,
  data: a definir
};

var Lista1 = {
  data: "data da prova 1",
  material: MaterialProva1
};

var Lista2 = {
  data: "data da prova 2",
  material: MaterialProva2
};

var
  MS,
  MédiaLista = (Lista1 + Lista2) / 2
;

//Critério de availiação
MS = (0.4 * Prova1 + 0.6 * Prova2) * 0.8 + (0.2 * MédiaLista);

if (MS < 6) {
  console.log('fodeu');
  recuperacao();
};

