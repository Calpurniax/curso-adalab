const fs = require('fs');

const handleFile = (error, content) => {
    if (error) {
        console.log(error)
    }
    else {
        const user = JSON.parse(content)
        user.user = 'Petra';
        console.log(user)
        const user2 = JSON.stringify(user);
        console.log(user2)
        fs.writeFile(
            './output-file.json',
            user2,
            handleWriteFile
        );
    }
}
const handleWriteFile = (err) => {
    if (err) {
        console.log('Error:', err);
    } else {
        console.log('The file has been saved!');
    }
};
fs.readFile(
    './input-file.json',
    'utf8',
    handleFile
);

//FUNCIONA EN BUCLE