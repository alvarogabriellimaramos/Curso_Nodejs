const os = require('os');
const fs = require('fs/promises');
const path = require('path');
async function VerificationFile(diretorio,file) {
    try {
        const PathComplete = path.join(diretorio,file)
        const bool = await fs.stat(PathComplete);
        return bool.isFile();
    }
    catch(e){
        console.log(e)
        return 'Diretorio não encontrado';
    };
};

async function ReadDir(dir) {
    const Paths = await fs.readdir(dir);
    Paths.forEach(async path => {
        const Path = await VerificationFile(dir,path);
        if (Path) {
            console.log(path);
            return;
        }
    })
};

const DirAtual = os.homedir();

ReadDir(DirAtual);