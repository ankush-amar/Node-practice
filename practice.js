const http = require('http');

const server = http.createServer((req, res) => {

});

server.listene(3000, () => {
    console.log(`Server running on address http://localhost:3000`);
});