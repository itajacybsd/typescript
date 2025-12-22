
// Classes abstratas não podem ser instanciadas diretamente
// mas podem ser herdadas por outras classes.
abstract class Celular { 
    ligar() {
        console.log('em ligação...');
    }

    // metodos abstratos devem ser implementados nas classes filhas
    abstract acessarRedeMovel(): void 
}

// classe concreta que herda da classe abstrata
class Iphone23Pro extends Celular {
    acessarRedeMovel(): void {
        console.log('Acessando rede 5G da Apple');
    }

}

//classe concreta que herda da classe abstrata
class GalaxyS57Ultra extends Celular {
    acessarRedeMovel(): void {
        console.log('Acessando rede 5G da Samsung');
    }

}


let c1 = new GalaxyS57Ultra();
c1.ligar();
c1.acessarRedeMovel();

// reuso através da herança
c1 = new Iphone23Pro();
c1.ligar();
c1.acessarRedeMovel();


export {}