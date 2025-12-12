interface OperacaoMatematicaObj {
    // funcao dentro da interface com atributos com nome
    // o nome do atributo é fn
    
    fn: (n1: number, n2: number) => number
}


const somaObj: OperacaoMatematicaObj = {
    fn(n1, n2) {
        return n1 + n2
    }
}

console.log(somaObj.fn(7,10))

//! ==============================

// interface do tipo função, não tem o nome do atributo
interface OperacaoMatematica {
    (n1: number, n2: number) : number
}

// interface como tipo de uma variavel, aí vc é obrigado a passar uma funcao
// atribuindo para essa interface
// ou seja uma interface que representa um tipo para uma função

const soma: OperacaoMatematica = (a: number, b: number) => {
    return a + b
}

console.log(soma(1,8))



