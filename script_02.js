let vogais = ['a', 'e', 'i', 'o', 'u'];
let inputPalavra1 = document.querySelector("#palavra1");
let inputPalavra2 = document.querySelector("#palavra2");
let botao = document.querySelector("button");

botao.onclick = function(){
    let palavra1 = inputPalavra1.value.toLowerCase();
    let palavra2 = inputPalavra2.value.toLowerCase();
    let palavra = palavra1 + palavra2;
    let numVogais = 0;

    for (let letra of palavra){
        for (let vogal of vogais){
            if(letra === vogal){
                numVogais++;
            }
        }
    }

    let numConsoantes = palavra.length - numVogais;

    if(numVogais > numConsoantes){
        alert("Ana ganhou a aposta!");
    }
    else{
        alert("Marcos ganhou a aposta!");
    }
}
