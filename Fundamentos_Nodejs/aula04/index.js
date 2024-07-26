function Dividir (x,y) {
    if (y === 0) {
        throw new Error('Erro,não é possivel dividir por zero');
    }
    return x / y ;
}

Dividir(100,2);

const num = 2 

try {
    num = 3 
}
catch (e) {
    console.log(e)
}