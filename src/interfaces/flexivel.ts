interface Flexivel {
    nome: string
    // [atrib: string]: any
    [atrib: string]: number | string
}

const f1: Flexivel = {
    nome: 'Teste',
    idade: 2,
    salario: 34,
    // deps: [{}]
}


console.log(f1.nome)

export {}