const EventEmitter = require("events");

class BibliotecaPrincipal extends EventEmitter{
    constructor () {
        super();
        this.books = [];
        this.clientes = [];
    };
    AddNewClient(client) {
        const obj = {
            client,
            messagem: `Client ${client} entrou no nosso restaurante`
        }
        this.clientes.push(client);
        this.emit('newClient',obj);
    }
    RemoveClient(client) {
        const index = this.clientes.indexOf(client);
        if (index !== -1) {
            const obj = {
                client,
                messagem: `Client ${client} saiu do nosso restaurente`
            }
            this.clientes.splice(index,1);
            this.emit('removeClient',obj);
            console.log(this.clientes)
        };
    };
};

const main = new BibliotecaPrincipal();

main.on('newClient',client => {
    console.log(client);
});
main.on('removeClient',client => {
    console.log(client);
})
main.AddNewClient('Alvaro');
main.AddNewClient('Gabriel');
main.AddNewClient('Ramos');
main.AddNewClient('Lima');

main.RemoveClient('Alvaro');
main.RemoveClient('Lima');