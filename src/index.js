
const express = require('express');

const app = express();

app.get('/', async (request, response) => {

    response.json({message: "My name is Conor", timestamp: Date.now(), team_name: "The Fighting Mongooses"});
});

app.listen(80, () => console.log('App available on http://localhost:80'));
