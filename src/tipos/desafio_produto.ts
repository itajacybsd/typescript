// type Produto = { nome: string; preco: number; desconto: number };
type Produto = { nome: string; preco: number; desconto: number; precoComDesconto: () => number };

// function precoComDesconto(produto: Produto): number {
//     return produto.preco * (1 - produto.desconto);
// }

let produto: Produto;

produto = {
    nome: "Tênis de corrida",
    preco: 150,
    desconto: 0.5,
    precoComDesconto()  {
        return this.preco * (1 - this.desconto);
    }
    // precoComDesconto: function(): number {
    //     return this.preco * (1 - this.desconto);
    // }
};

console.log(produto.nome);
console.log(produto.preco);
console.log(produto.desconto);
console.log(produto.precoComDesconto());