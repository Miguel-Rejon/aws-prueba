const express = require('express');

const app = express(); 

app.get('/', (req, res) => res.send('<h1>Prueba AWS</h1>'))

app.listen(80)
console.log('Server running at port 80');