const os = require('os');

const plataform = os.platform();
const release = os.release();
const host = os.hostname();
const segunds = os.uptime();
console.log(plataform);
console.log(release)
console.log(host);
console.log(segunds)

const freeram = os.freemem();
const cpu = os.cpus();
console.log(cpu)
console.log(freeram);

const dir = os.homedir();
const tempdir = os.tmpdir();
console.log(tempdir)
console.log(dir);