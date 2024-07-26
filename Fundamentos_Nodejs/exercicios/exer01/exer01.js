// sistema de notificação 

class MainCanal {
    constructor() {
        this.inscritos = [];
        this.videos = [];
    }
    AddNewInscrito(inscrito) {
        this.inscritos.push(inscrito);
    }
    AddNewVideo(video) {
        this.videos.push(video);
        this.Notify();
    }
    Notify() {
        this.inscritos.forEach(inscrito => inscrito.Notify());
    }
};

class Inscrito {
    Notify() {
        console.log(`Novo video adicionado.`)
    }
}

const canal = new MainCanal ();
const inscrito = new Inscrito ();
const inscrito2 = new Inscrito ();
canal.AddNewInscrito(inscrito);
canal.AddNewInscrito(inscrito2);

canal.AddNewVideo('video novo');