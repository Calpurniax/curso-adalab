const express = require('express');
const app = express();

//create server

const serverPort = 3000;
app.listen(serverPort, () => {
    console.log('funcionando')
})


//config static server
const staticServer = '../public';
app.use(express.static(staticServer))