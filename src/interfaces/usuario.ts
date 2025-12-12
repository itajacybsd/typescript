//! a "?" indica que o campo é opcional
interface Usuario {
    id?: number;
    nome: string;
    email: string;
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

//! Partial torna todos os campos opcionais
const usuarioOpcional: Partial<Usuario> = {
    id: 456,
    nome: "Maria",
    senha: "minhasenha123"
}

console.log(usuarioOpcional.id);
console.log(usuarioOpcional.nome);
console.log(usuarioOpcional.senha);

//! Required torna todos os campos obrigatórios
const usuarioCompleto: Required<Usuario> = {
    id: 789,
    nome: "Pedro",
    email: "pedro@zmail.com",
    senha: "minhasenha456"
}

console.log(usuarioCompleto.id);
console.log(usuarioCompleto.nome);
console.log(usuarioCompleto.email);
console.log(usuarioCompleto.senha);


export {}