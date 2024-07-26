// design patterns 

//exemplo canal do youtube

class MainCanal {
    constructor (name) {
        this.name = name;
        this.videos = ['teste','teste1'];
        this.inscritos = [];
    };
    AddNewInscrito (inscrito) {
        this.inscritos.push(inscrito);
    };
    AddNewVideo(video) {
        this.videos.push(video);
        this.NotifyAllUsers();
    };
    NotifyAllUsers() {
        this.inscritos.forEach(inscrito => {
            inscrito.update(this.name);
        });
    };
};

const canal = new MainCanal('alvinho13');


class Inscrito {
    update (name) {
        console.log(`Novo video do canal ${name} foi lançado`);
    };
}
const inscrito1 = new Inscrito();
canal.AddNewInscrito(inscrito1);


const inscrito2 = new Inscrito();
canal.AddNewInscrito(inscrito2);

canal.AddNewVideo('video3')