// classificador de nivel de heroi
// o que deve ser ultilizado: 
//                          VARIAVEI; OPERADORES;LAÇOES DE REPETIÇÃO; ESTRUTURA DE DECISÃO
//OBJETIVO:
//Crie uma variavel para armazenar o nome e a quantidade de experiencia (XP) de um heroi, 
//depois utilize uma estrutura de decisão para aprensentar algumas das mensagens a baixo:

// Se XP for menor do que 1.000 = Ferro
// Se XP for entre 1.001 e 2.000 = Bronze
// Se XP for entre 2.001 e 5.000 = Prata
// Se XP for entre 6.001 e 7.000 = Ouro
// Se XP for entre 7.001 e 8.000 =Platina
// Se XP for entre 8.001 e 9.000 =Ascendente
// Se XP for entre 9.001 e 10.000 = Imortar
// Se XP for maior ou igual a 10.001 = Radiante

//SAÍDA

//AO final deve se exibir uma mensagem:
//"O Heroí de nome **nome** está no nível de **nivel** "

let nomeHeori = "Xarad"
let pontosDeXp = 2000
let nivelHeroi = ""

if(pontosDeXp <= 1000){
    nivelHeroi = "Ferro"
}

else if( (pontosDeXp > 1000 ) && (pontosDeXp < 2001)){
    nivelHeroi = "Bronze"
}

else if( ( pontosDeXp > 2000 ) && (pontosDeXp < 5001)){
    nivelHeroi = "Prata"
}

else if (( pontosDeXp > 6000 ) && (pontosDeXp < 7001)){
    nivelHeroi = "Ouro"
}

else if( ( pontosDeXp > 7000 ) && (pontosDeXp < 8001)){
    nivelHeroi = "Platina"
}

else if( ( pontosDeXp > 8000 ) && (pontosDeXp < 9001)){
    nivelHeroi = "Assendente"
}

else if (( pontosDeXp > 9000 ) && (pontosDeXp < 10000)){
    nivelHeroi = "Imortal"
}
else{
    nivelHeroi = "Radiante"
}

console.log("O Heroí de nome " +  nomeHeori + " está no nível de " + nivelHeroi )