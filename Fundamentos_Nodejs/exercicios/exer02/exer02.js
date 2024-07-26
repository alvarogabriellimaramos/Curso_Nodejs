class Fabrica {
    constructor () {
        this.temperatura = 0;
        this.pressão = 0;
        this.operadores = [];
    }
    AddNewOperador (operador) {
        if (!operador instanceof Operador) {
            console.log('Erro ao adiciona operador');
            return;
        };
        this.operadores.push(operador);
    };
    Temperatura () {
        this.temperatura++
        this.NotifyTemperatura();
    }
    NotifyTemperatura () {
        this.operadores.forEach(operador => operador.notifyTemp(this.temperatura));   
    }
}
class Operador {
    notifyTemp (temp) {
        console.log(`a temperatura da fabrica está a ${temp}`)
    }
}
const fabrica = new Fabrica ();
const operador = new Operador();
const operador2 = new Operador();
const operador3 = new Operador();
fabrica.AddNewOperador(operador);
fabrica.AddNewOperador(operador2);
fabrica.Temperatura();
fabrica.Temperatura();
fabrica.Temperatura();