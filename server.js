const express = require("express");
const app = express();


app.use(express.static(__dirname + '/views'));


const server = app.listen(8000, () =>
console.log(`el server esta usando el puerto: ${server.address().port}!`)
);