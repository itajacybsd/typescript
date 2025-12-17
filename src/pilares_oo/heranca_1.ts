interface Entidade {
    id: string
}

// Extends = Herança
// extende de Entidade para herdar suas propriedades e com mais atributos
interface EntidadeComDatas extends Entidade {
    criadoEm?: Date   //createdAt
    AtualizadoEm: Date //updatedAt
    excluidoEm?: Date    //deletedAt
}


interface Usuario  extends EntidadeComDatas {
    nome: string
    email: string
    senha?: string

}

// exemplo de usuario
const u1: Usuario = {
    id: 'aaa-123',
    nome: 'João',
    email: 'joao@zmail.com',
    criadoEm: new Date(),
    AtualizadoEm: new Date()
}

console.log(u1);

// exemplo de produto



interface Vendavel {
    preco: number
    desconto: number
}

interface Produto  extends EntidadeComDatas, Vendavel {
    nome: string
    // descricao: string
}

const p1: Produto = {
    id: 'produto-001',
    nome: 'Notebook',
    preco: 199.99,
    desconto: 0.1,
    criadoEm: new Date(),
    AtualizadoEm: new Date()
}

console.log(p1);



export {}