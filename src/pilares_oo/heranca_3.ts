// exemplo de caso de uso:  - registrar um usuario na aplicacao
// logar um usuario na aplicacao
// pagar um boleto
// buscar produtos no catalogo
// adicionar produto no carrinho de compras
// finalizar compra


interface Usuario {
    id: number;
    nome: string;
    email: string;
    senha: string;
}
interface CasoDeUso {
    executar(entrada: any): any;
}

class RegistrarUsuario implements CasoDeUso {
    executar(usuario: Usuario) {
        console.log(`Executando o caso de uso de registrar usuario`);
        console.log(usuario);
        // logica de registrar o usuario no sistema
        // return true;
    }
}



const u1: Usuario = {
    id: 321,
    nome: 'João',
    email: 'joao@zmail.com',
    senha: '123456'
}

const casoDeUso: CasoDeUso = new RegistrarUsuario();
casoDeUso.executar(u1);



export { }