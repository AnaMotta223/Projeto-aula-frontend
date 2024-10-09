const produto = null;

// console.log(produto.descricao);

// if(produto){
//     console.log(produto.descricao);
    
// }
// else{
//     console.log("Produto é undefined");
    
// }


//confere se a descricao do produto é nula e permite que a 
//aplicação não crashe caso isso aconteca

//1 ? não deixa crashar e 2 ?? ele funciona como se fosse um ternario
console.log(produto?.descricao??"Descrição inexistente");

const produto2 = {
    descricao: "Celular",
    valor: 2000
};

produto2.descricao = "TV 42";

console.log(produto2.descricao);

const idade = 10;

//Null Coalescing Operator
//verifica se a const tem valor ou é nula
console.log(`Sua idade é ${idade || "não informada!"}`);

