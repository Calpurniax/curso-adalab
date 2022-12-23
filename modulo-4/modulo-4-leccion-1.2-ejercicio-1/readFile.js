const fs = require('fs');
const handleFile = (error, content) => {
    if (error) {
        console.log(error)
    } else {
        console.log(content)
        const listName = content.split('/');//para hacer un array de un string en base a un separador
        for (const name of listName) {
            console.log(`- ${name}`)
        }
    }
};

fs.readFile('./ow.txt', 'utf-8', handleFile)