type ContaCorrente = {numero: number, saldo: number, movimentar: number}

type Cliente = {nome: string, email: string, contas: ContaCorrente[]}

function movimentarConta(numConta: number, valor: number) {
    let cli = clientes.find(c => c.contas.find(cc => cc.numero === numConta)) ?? null;
    if (cli === null) {
        throw new Error('Conta  não existe')
    } else {
        let conta = cli.contas.find(cc => cc.numero === numConta) ?? null;
        conta!.saldo = conta!.saldo + valor;
    }
}

const clientes: Cliente[] = [
    {nome: 'Jose', email: 'jose@zmail.com',
        contas: [
            {numero: 1, saldo: 100, movimentar:0},
            {numero: 2, saldo: 1000, movimentar:0},
            {numero: 3, saldo: 2000, movimentar:0},
    ]},
    {nome: 'Maria', email: 'maria@zmail.com',
        contas: [
            {numero: 4, saldo: 600, movimentar:0},
            {numero: 5, saldo: 770, movimentar:0},
    ]},
    {nome: 'Ana', email: 'ana@zmail.com',
        contas: [
            {numero: 6, saldo: 1600, movimentar:0},
    ]},
    {nome: 'Carlos', email: 'carlos@zmail.com',
        contas: [
            {numero: 7, saldo: 600, movimentar:0},
    ]},
    {nome: 'Bia', email: 'bia@zmail.com',
        contas: [
            {numero: 8, saldo: 1234, movimentar:0},
    ]},
]

console.log(clientes[0]);
console.log(clientes[1]);

movimentarConta(1,100);
movimentarConta(2,1000);
movimentarConta(3,550);
movimentarConta(4,700);
movimentarConta(5,-500);


console.log(clientes[0]);
console.log(clientes[1]);

