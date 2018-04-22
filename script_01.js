let vogais = ['a', 'e', 'i', 'o', 'u'];
let inputPalavra = document.querySelector("input");
let botao = document.querySelector("button");

botao.onclick = function(){
    let palavra = inputPalavra.value.toLowerCase();
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