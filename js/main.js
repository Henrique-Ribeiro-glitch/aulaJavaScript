var nome = "Henrique";
var frase = "Ao meu js";
var frase2 = "Só o Naruto clássico presta";
var lista = ["maçã", "pêra", "laranja"];
var fruta = {nome:"maça", cor:"vermelha"};
var frutas = [{nome:"uva", cor:"roxa"}, {nome:"banana", cor:"amarela"}];

alert("Bem vindo " + nome.replace("João", "Henrique"));
alert(frase.toUpperCase());
alert(frase2.toLowerCase());
console.log(lista[1]);
lista.push("uva");
console.log(lista);
lista.pop();
console.log(lista);
console.log(lista.length);
console.log(lista.reverse());
console.log(lista.toString());
console.log(lista.join("-"));
console.log(fruta.nome);
console.log(frutas);

var idade = prompt("Qual sua idade");
if (idade >= 18) {
    alert("maior de idade");
} else {
    alert("menor de idade");
};

var contador = 0;
while (contador < 5){
    console.log(contador);
    contador = contador +1;
};

var contador2;
for(contador2 = 0; contador2 < 5; contador2++){
    console.log(contador2);
};

var data = new Date();
console.log(data);
console.log(data.getHours);
console.log(data.getMinutes);
console.log(data.getDay);
console.log(data.getMonth);
