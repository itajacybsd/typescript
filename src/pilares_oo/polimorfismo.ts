// Polimorfismo é a capacidade de um objeto assumir várias formas.

abstract class Animal {
    abstract emitirSom(): string;
}

class Gato extends Animal {
    emitirSom(): string {
        return "Miau";
    }   
}
class Cachorro extends Animal {
    emitirSom(): string {
        return "Au Au";
    }
}

function exibir(animal: Animal) {
    console.log(animal.emitirSom());
}

let a: Animal = new Gato();
exibir(a); // Miau

// aplicando polimorfismo
a = new Cachorro();
exibir(a); // Au Au

export {}