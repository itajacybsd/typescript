import { multiplicar, multiplicarPerigosa, saudacao } from "../../src/tipos/funcoes";

test('Deve retornar uma saudacao baseada na hora atual', () => {
    const s = saudacao('Maria');
    expect(s).toBe('Olá Maria! Passar bem');
});

test('Dev multiplicar dois numeros', () => {
    const m = multiplicar(3, 4);
    expect(m).toBe(12);
});

test('Deve retornar NaN com parametro do tipo string...', () => {
    const m = multiplicarPerigosa("a", 4);
    expect(m).toBeNaN();
});

