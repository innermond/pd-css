const http = require('http');
const url = require('url');
const fs = require('fs');

const hostname = 'localhost';
const port = 3000;

const server = http.createServer((req, res) => {
    q = url.parse(req.url, true).query;
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.setHeader('Access-Control-Allow-Origin', '*');
    if (q.s == undefined) {
        console.log('undefined q.s');
        return;
    }
    try {
        console.log(`styling ${q.s}.css`)
        css = fs.readFileSync('../src/'+q.s+'.css');
        res.end(css);
    } catch (e) {
        console.log(e);
    }
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
