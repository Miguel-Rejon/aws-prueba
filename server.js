const express = require('express');

const app = express(); 

app.get('/', (req, res) => res.send('<h1>Prueba AWS</h1>'))

app.listen(8080)
console.log('Server running at http://localhost:8080/');