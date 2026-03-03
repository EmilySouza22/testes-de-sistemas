// Aula 1 sobre toThrow

// A aula de hoje será mais focada em testes que não dão certo

export function sum(a, b){
    if (b == 'b'){
        throw new Error("Os valores precisam ser númericos")
    }
    return a + b
}
