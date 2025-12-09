type StatusVenda = 'iniciada' | 'concluida' | 'cancelada';

let st: StatusVenda = 'iniciada';
// st = 'opa'; // Erro: Type '"opa"' is not assignable to type 'StatusVenda'.
st = 'cancelada';

console.log(st);