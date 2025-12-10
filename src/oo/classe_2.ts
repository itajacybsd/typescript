class Curso {
    private _id: number;
    public nome: string | undefined;

    constructor(id: number) {
        this._id = id;
        if (id <1) throw new Error("ID inválido");
    }


    get id() {
        return this._id;
    }
}

const c1 = new Curso(123);
c1.nome = "Iniciando com TypeScript";
console.log(c1.id);
console.log(c1.nome);