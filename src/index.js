
const express = require('express');
//const {readFile} = require('fs').promises;
//const {writeFile} = require('fs');

const app = express();

/*
const path = './msg.json';
var datetime = new Date(); //Date.now()?
//var jsonDate = datetime.toJSON();
//const vals = {message: "My name is Conor", timestamp: new Date(jsonDate).toUTCString()};
const vals = {message: "My name is Conor", timestamp: datetime};
*/

/*
writeFile(path, JSON.stringify(vals, null, 2), (error) => {
    if(error){
        console.log('ERROR: ', error);
        return;
    }

    console.log('JSON Written Successfully.');
})
*/

app.get('/', async (request, response) => {

    //response.send(await readFile('./msg.json', 'utf8'));
    response.json({message: "My name is Conor", timestamp: Date.now()});
});

app.listen(process.env.PORT || 80, () => console.log('App available on http://localhost:3000'));
