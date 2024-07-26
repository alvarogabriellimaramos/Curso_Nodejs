const http = require("http");

const PORT = 8000;

const data = [
    {
        title: 'Lava os pratos',
        description: 'Lava os pratos depois do almoço',
        done: true 
    },
    {
        title: 'Lava o banheiro',
        description: 'Lava o banheiro depois de lava os pratos',
        done: false
    }
];

const server = http.createServer((request,response) => {
    const DataJson = JSON.stringify(data,null,2);
    response.write(DataJson);
    response.end();
})

server.listen(PORT,() => console.log(`Server Running ${PORT}`));