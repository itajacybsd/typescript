const VendasStatus = {
    INICIADA: 'iniciada',
    CONCLUIDA: 'concluida',
    CANCELADA: 'cancelada'
} as const;

// VendasStatus.INICIADA = 'outra coisa'; // Erro: Cannot assign to 'INICIADA' because it is a read-only property. 

console.log(VendasStatus.INICIADA);
