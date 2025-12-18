//! interface define atributos publicos
//! então na classe produto, o id deve ser publico
//! se definirmos o id como protected, teremos um erro de compilação

interface Entidade {
    id: number;
}

interface Vendavel {
    nome: string;
    preco: number;  
    desconto: number;
}

//! HERANÇA MÚLTIPLA DE INTERFACES
class Produto implements Entidade, Vendavel {
    // constructor(protected readonly id: number) {}  // dá erro aqui por causa do protected
    constructor(
        public readonly  id: number,
        readonly nome: string,
        readonly preco: number,
        readonly desconto: number
    ) {}

    get precoFinal() {
        return this.preco * (1 - this.desconto);
    }
}  

class Servico implements Entidade, Vendavel { 
     constructor(
        readonly  id: number,
        readonly nome: string,
        readonly preco: number,
        readonly desconto: number
    ) {}
}

const p1 = new Produto(123, 'Caneta', 4.99, 0.05);
console.log(p1);
console.log(p1.precoFinal);

let v1: Vendavel = new Produto(456, 'Instalação', 89.99, 0.1);
console.log(v1);

v1 = new Servico(789, 'Consultoria', 99.99, 0.15);
console.log(v1);

console.log(v1.preco)

export {}