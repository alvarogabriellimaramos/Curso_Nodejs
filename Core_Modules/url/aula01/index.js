// utilizando o modulo url

const url = require('url');

const UrlParse = url.parse('https://web.whatsapp.com/search?produtos=notebook',true);
console.log(UrlParse.search);