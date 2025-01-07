let vitorias 
let derrotas
let Elo
let rank
let player= [[25,16],
            [25,10],
            [50,25],
            [100,40],
            [100,15],
            [100,5],
            [200,19]]

for (let i = 0; i < 7; i++  ){
    Elo = calduloDoElo(player[i][0],player[i][1])
    function calduloDoElo(vitorias,derrotas){
        let Elo = vitorias - derrotas
        return Elo
    }

    if(Elo < 10){
        rank = "Ferro"
    }
    else if(Elo >= 11 && Elo <=20){
        rank = "Bronze"
    }
    else if(Elo >= 21 && Elo <=50){
        rank = "Prata"
    }
    else if(Elo >= 51 && Elo <=80){
        rank = "Ouro"
    }
    else if(Elo >= 81 && Elo <=90){
        rank = "Diamante"
    }
    else if(Elo >= 91 && Elo <=100){
        rank = "Lendário"
    }
    else{
        rank = "Imortal"
    }
    console.log("O Herói tem de saldo de " + Elo + " está no nível de " + rank)
}