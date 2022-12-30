const express = require('express');
const cors = require('cors');
//mi servidor q es de express, necesito q use cors para que sea accesible desde cualquier aplicación o cliente,desde cualquier lugar, es lo que viene a configurarse en estas dos líneas:
const server = express();
server.use(cors());
//las respuestas y peticiones del servidor serán en JSON:
server.use(express.json());
//que puerto usaremos para conectador
const port = 3000;
server.listen(port, () => {
    console.log('listening ' + port);
});
//función para el número aleatorio
function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

//Creamos un endpoint de tipo GET, con respuesta en formato json, es un ejemplo, tendríamos que crear el que quisieramos/necesitaramos
server.get('/response-a', (req, res) => {
    res.json({ result: 'ok, a' });
});
server.get('/response-b', (req, res) => {
    //devolver un html. se podría hacer con ejs o así a pelo
    const htmlCode = `<!DOCTYPE html>
        <html lang="en">
            <head>
                <meta charset="UTF-8">
                <meta http-equiv="X-UA-Compatible" content="IE=edge">
                <meta name="viewport" content="width=device-width, initial-scale=1.0">
                <title>prueba</title>
            </head>
            <body>
                <main>
                    <h1>esto es una página de prueba</h1>
                </main>
            </body>
        </html>`;
    res.send(htmlCode);
});
server.get('/response-c', (req, res) => {
    //el numero entre 0 y 10 y redireccionar según sea un número par o impar
    const number = getRandomInt(10);
    console.log(number);
    if (number % 2 === 0) {
        res.redirect('https://www.youtube.com/');
    } else {
        res.redirect('https://www.instagram.com/');
    }
});
server.get('/response-d', (req, res) => {
    //por query params user=1 o 2 si no, error-->!! date cuenta que no tienes que poner nada en la URL sobre el query, solo lo pondrías en el front
    console.log(req.query)
    const user = parseInt(req.query.user)
    console.log(user)
    if (user === 1 || user === 2) {
        res.json({ result: 'ok d' });
    } else {
        res.status(404).json({ result: 'invalid query param' });
    }

});


//ESTE EJERCICIO: 1.npm run dev 2.poner en postman cada endpoint!!