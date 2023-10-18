const http = require('http');

const server = http.createServer((req, res) => {
    res.write('Hello World');
    res.end();
    }
);

server.listen(process.env.PORT || 3000);

console.log('Listening on port 3000...');