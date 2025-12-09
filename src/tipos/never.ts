function falhar(msg: string): never {
    throw new Error(msg);
}


falhar('Descriçao muito pequena');

