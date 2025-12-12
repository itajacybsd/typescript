interface Usuario {
    id: number;
    nome: string;
    email: string;
    //! a "?" indica que o campo é opcional
    senha?: string;
    // funcao: (a: number, b: number) => boolean;
}

const usuarioLogado: Usuario = {
    id: 123,
    nome: "Joao",
    email: "joao@zmail.com"
}

console.log(usuarioLogado.id);
console.log(usuarioLogado.nome);
console.log(usuarioLogado.email);

export {}