const pessoa = { 
    nome: "Ana",
    sobrenome: "Silva",
    idade: 23,
    endereco: {
        rua: "Rua Henrique Noel",
        numero: 108,
        bairro: "Bingen"
    },
    exibirPessoa(){
        return "Ok";
    }
};
//objeto pessoa tem atributos, objeto endereco e uma funcao dentro

//quando é funcao colocar o interrogacao antes do ()
console.log(pessoa.exibirPessoa?.()??"Função inexistente");
//o atributo nome existe em pessoa?
console.log('nome' in pessoa);
console.log(Object.keys(pessoa));
console.log(Object.values(pessoa));
console.log(Object.entries(pessoa));


