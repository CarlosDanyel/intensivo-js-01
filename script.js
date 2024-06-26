alert("Hello World");

const n1 = 10;
const n2 = 20;

const result = n1 + n2;

alert(result);

if (typeof result === "number") {
  alert("É um número");
} else {
  alert("Não é um número");
}

const string = 12;

if (typeof string === "string") {
  alert("É uma String");
} else {
  alert("Não é uma String");
}

const bole = true;

if (typeof bole === "boolean") {
  alert("É um Booleano");
} else {
  alert("Não é um Booleano");
}

const resultSub = n1 - n2;
const resultMult = n1 * n2;
const resultDiv = n1 / n2;

alert(resultSub);
alert(resultMult);
alert(resultDiv);

const par = 2;

if (par % 2 === 0) {
  alert("É par");
} else {
  alert("Não é par");
}
