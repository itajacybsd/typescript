class DesafioEstatico {
   // nota é um atributo de instancia
    nota: number = 1000  // não alterar essa linha

    static notaEstatica: number = 2000

    // metodo de classe(estatico)
    static executar() {
        // Imprimir o valor de nota no console

        // foi necessário criar uma instancia para acessar o atributo de instancia
        const instancia = new DesafioEstatico();
        console.log(instancia.nota);
        // console.log(new DesafioEstatico().nota);

        console.log(DesafioEstatico.notaEstatica);
    }
}

DesafioEstatico.executar();

const outraInstancia = new DesafioEstatico();
console.log(outraInstancia.nota);


