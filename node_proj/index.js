//const {EventEmitter} = require('events');
//const {readFile, readFileSync} = require('fs'); //filesystem
//const {readFileSync} = require('fs');
const {readFile} = require('fs').promises;
//const myModule = require('./my_module');
const express = require('express');

const app = express();

//request = incoming, response = outgoing
// vv without promises vv
/*
app.get('/', async (request, response) => {

    readFile('./home.html', 'utf8', (err, html) => {

        if(err) {
            response.status(500).send('it broke');
        }

        response.send(html);
    })
});

app.listen(process.env.PORT || 3000, () => console.log('App available on http://localhost:3000'));

*/

// vv with promises vv
app.get('/', async (request, response) => {

    response.send (await readFile('./home.html', 'utf8'));
});

app.listen(process.env.PORT || 3000, () => console.log('App available on http://localhost:3000'));


/* 
console.log('hello world');

//exit is event and function is callback
process.on('exit', function(){
    console.log('message');
})

const eventEmitter = new EventEmitter();

eventEmitter.on('lunch', () => {
    console.log('yum');
} )

eventEmitter.emit('lunch');
eventEmitter.emit('lunch');

const txt1 = readFileSync('./hello.txt', 'utf8');
console.log(txt1);

const txt2 = readFile('./hello.txt', 'utf8', (err, txt2) => {
    console.log(txt2);
});

console.log('Look at that ordering!');

async function printer() {
    const file = await readFile('./hello.txt', 'utf8');

    console.log(file);
}

printer();

console.log(myModule); */