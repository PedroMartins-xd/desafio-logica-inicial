/* 
# 1️⃣ Desafio Classificador de nível de Herói

** o que deve ser ultilizado ** 

- Variáveis 
- Operadores
- Laços de repetição 
- Estruturas de decisões

## Objetivo

Crie uma variavel para armazenar o nome e a quantidade de experiencia (XP) de
um herói, depois utilize uma estrutura de decisão para apresentar alguma das
mensagens abaixo: 

Se XP for menor de que 1000 = Ferro
Se XP for entre 1.001 e 2.000 = Bronze
Se XP for entre 2.001 e 5.000 = Prata 
Se XP for entre 6.001 e 7.000 = Ouro
Se XP for entre 7.001 e 8.000 = Platina 
Se XP for entre 8.001 e 9.000 = Ascendente
Se XP for entre 9.001 e 10.000 = Imortal
Se XP for maior ou igual a 10.001 = Radiante

## Saída 

Ao final deve se exibir uma mensagem: 
"O herói de nome **{nome}** está no nível de **{nivel}**" 
*/


let nickname = "Gandalf";
let experience = 10001;

if (experience <= 1000) {
    console.log("Ferro");
} else if (experience > 1000 && experience <= 2000) {
    console.log("Bronze");
} else if (experience >= 2001 && experience <= 5000) {
    console.log("Prata");
} else if (experience >= 6001 && experience <= 7000) {
    console.log("Ouro");
} else if (experience >= 7001 && experience <= 8000) {
    console.log("Platina");
} else if (experience >= 8001 && experience <= 9000) {
    console.log("Ascendente");
} else if (experience >= 9001 && experience <= 10000) {
    console.log("Imortal");
} else {
    console.log("Radiante")
}

console.log("O herói de nome " + nickname + " está no nivel " + experience);