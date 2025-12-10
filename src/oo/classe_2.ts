class Curso {
    //  id: number;
    // public nome: string | undefined;

    // colocando o modificador readonly no construtor não é necessário declarar o atributo antes
    // assim ele passa a ser entendido como um atributo da instancia

    // e ainda colocando o modificador public no atributo nome, ele também passa a ser um atributo da instancia
    constructor(readonly id: number, public nome?: string) {
        if (id <1) throw new Error("ID inválido");
    }

 
}

const c1 = new Curso(123);
c1.nome = "Iniciando com TypeScript";
console.log(c1.id);
console.log(c1.nome);

const c2 = new Curso(456, "TypeScript Avançado");
console.log(c2.id);
console.log(c2.nome);
