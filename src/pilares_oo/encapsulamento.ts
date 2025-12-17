class Carro {
    //! Private: acessível somente dentro da própria classe
    private velocidadeAtual: number = 0;
    protected VELOCIDADE_MAXIMA: number = 200;
    // public nome: string;

    constructor(public nome: string) {

    }

    get velocidade() {
        return this.velocidadeAtual;
    }

    //! Protected: acessível dentro da classe e por subclasses
    //! transmitido por herança    
    protected alterarVelocidade(delta: number) {
        const novaVelocidade = this.velocidadeAtual + delta;

        if (novaVelocidade >= 0 && novaVelocidade <= this.VELOCIDADE_MAXIMA) {
            this.velocidadeAtual = novaVelocidade;
        }
    }

    acelerar() {
        this.alterarVelocidade(5);
    }


}

const c1 = new Carro('Fusca');
//  console.log(c1.velocidadeAtual); // Erro de compilação: propriedade privada
// console.log(c1.VELOCIDADE_MAXIMA); // Erro de compilação: propriedade protegida 
//  c1.alterarVelocidade(15);
console.log(c1.nome);
c1.acelerar();
c1.acelerar();
c1.acelerar();
console.log(c1.velocidade);




export { }