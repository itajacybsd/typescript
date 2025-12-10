// Produto id, nome, preco, desc, precoFinal
// id
// nome entre 2 a 250
// preco > 0
// desc entre 0 e 0.8
// precoFinal = preco * (1 - desc)


class Produto {
    // id: number;
    // nome: string | undefined;
    // preco: number | undefined;
    // desc: number | undefined;
    precoFinal: () => number;

    constructor(readonly id: number, public nome: string, public preco: number, public desc: number) {
        if (id < 1) throw new Error("ID inválido");
        if (nome.length < 2 || nome.length > 250) throw new Error("Nome inválido");
        if (preco < 0) throw new Error("Preço inválido");
        if (desc < 0 || desc > 0.8) throw new Error("Desconto inválido");
        this.precoFinal = () => {
            return (preco ?? 0) * (1 - (desc ?? 0));
        };
    }

}


const p1 = new Produto(1, "Caneta", 7.5, 0.1);

console.log();
console.log(p1.id);
console.log(p1.nome);
console.log(p1.preco);
console.log(p1.desc);

console.log(p1.precoFinal());
