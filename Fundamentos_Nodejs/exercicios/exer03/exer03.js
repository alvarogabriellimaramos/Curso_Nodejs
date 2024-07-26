class ChatOnline {
    constructor (name) {
        this.name = name;
        this.contatos = [];
    };
    AddNewContato (contato) {
        this.contatos.push(contato);
    }
    SendMsg(contato,msg) {
        contato.sendMsg(msg)
        this.notifyMsg();
    }
    notifyMsg () {
        this.contatos.forEach(contato => {
            contato.notify()
        })
    }
}
class Contato {
    constructor (name) {
        this.name = name;
        this.messagens = [];
    }
    sendMsg (msg) {
        this.messagens.push(msg);
    }
    notify() {
        console.log(`${this.name}: ${this.messagens}`);
    }
}
const chat = new ChatOnline();

const contato1 = new Contato('alvaro');

chat.AddNewContato(contato1);

chat.SendMsg(contato1,'Olá');
chat.SendMsg(contato1,'Olá');