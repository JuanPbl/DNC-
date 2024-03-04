var selecao = 'Chile'
console.log(selecao)

if(selecao == 'Brasil') {
    console.log(`${selecao} ganhou 5 vezes a copa do mundo`)
} else if (selecao == 'Argentina' || selecao == "Uruguai"){
    console.log(`${selecao} já ganhou 2 vezes a copa`)
} else {
    console.log(`${selecao} nunca ganhou a copa do mundo`)
}