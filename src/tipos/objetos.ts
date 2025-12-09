// type Usuario = { nome: string; email: string };



// let usuario: Usuario = {
let usuario = {
    nome: "João",
    email: "jjpro@zmail.com"
}

// usuario.senha = '123456'; // Erro: propriedade 'senha' não existe no tipo do objeto

console.log(usuario.nome);
console.log(usuario.email);

usuario = {
    nome: "Maria",
    email: "maria@zmail.com"
}

console.log(usuario.nome);
console.log(usuario.email);