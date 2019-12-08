const http = require('http');

const url = require("url");
const hostname = 'localhost';
const port = 3000;

const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');

    //On demande le nom de l'utilisateur dans l'URL
    let username = url.parse(req.url, true).query;

    //Et on initialise le chemin pour /hello
    let path = url.parse(req.url).pathname;

    //On initialise une condition if (si) l'utilisateur
    //rentre rien, on lui retourne la question.
    //sinon on lui renvoie son nom.
    if (path == '/hello') {
        if (username.nom === undefined) {
            console.log('Quel est votre nom ?');
        } else {
            console.log('Bonjour, ' + username.nom + ' !');
        }
    } else {
        console.log('Hello World');
    }
});

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});