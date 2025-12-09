type Usuario = { nome: string; email: string }

const usuarios: Usuario[] = [
    { nome: 'Joao', email: 'joao@zmail.com' },
    { nome: 'Pedro', email: 'pedro@zmail.com' },
    { nome: 'Maria', email: 'maria@zmail.com' },
    { nome: 'Gustavo', email: 'gustavo@zmail.com' },
    { nome: 'Amanda', email: 'amanda@zmail.com' },
    { nome: 'Rafaela', email: 'rafaela@zmail.com' },
]
let x: string | null;

function buscarPorEmail(email: string): Usuario | null {
   // .find ira buscar o usuario e ai compara os dados do usuario
    return usuarios.find(u => u.email === email) ?? null;
}

console.log(buscarPorEmail('maria@zmail.com'))
console.log(buscarPorEmail('carlos@zmail.com'))