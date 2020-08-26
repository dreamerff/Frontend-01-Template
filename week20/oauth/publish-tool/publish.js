const http = require('http');
const fs = require('fs');
const querystring = require('querystring');
const archiver = require('archiver');
const child_process = require("child_process").exec;
let packname = './package';

let redirect_uri = encodeURIComponent("http://localhost:8081/auth")
child_process(`exec open https://github.com/login/oauth/authorize?client_id=Iv1.375ef10b37e2d7a3&redirect_uri=${redirect_uri}&scope=read%3Auser&state=123abc`)

const server = http.createServer((req, res) => {
    console.log(req.url);
    let token = req.url.match(/token=([^&]+)/)[1];
    const options = {
        host: 'localhost',
        port: 8081,
        path: '/?filename=package.zip',
        method: 'POST',
        headers: {
            'Content-Type': 'application/octet-stream'
        }
    }

    const request = http.request(options, (res) => {
        console.log(`STATUS: ${res.statusCode}`);
        console.log(`HEADERS: ${JSON.stringify(res.headers)}`);
    
    });
    
    request.on('error', (e) => {
        console.error(`problem with request: ${e.message}`);
    });
    
    var archive = archiver('zip', {
        zlib: { level: 9 } // Sets the compression level.
    });
    
    archive.directory(packname, false);
    
    archive.finalize();
    
    archive.pipe(request);
    
    archive.end('end', () => {
        request.end();
        let redirect_uri = encodeURIComponent("http://localhost:8081/auth")
        child_process(`exec open https://github.com/login/oauth/authorize?client_id=Iv1.375ef10b37e2d7a3&redirect_uri=${redirect_uri}&scope=read%3Auser&state=123abc`)
    })
})

server.listen(8080);

//const postData = querystring.stringify({ 'content': 'hello World 23333' });

/* let packname = './package';

const options = {
    host: 'localhost',
    port: 8081,
    path: '/?filename=package.zip',
    method: 'POST',
    headers: {
        'Content-Type': 'application/octet-stream'
    }
}

const req = http.request(options, (res) => {
    console.log(`STATUS: ${res.statusCode}`);
    console.log(`HEADERS: ${JSON.stringify(res.headers)}`);

});

req.on('error', (e) => {
    console.error(`problem with request: ${e.message}`);
});

var archive = archiver('zip', {
    zlib: { level: 9 } // Sets the compression level.
});

archive.directory(packname, false);

archive.finalize();

archive.pipe(req);

archive.end('end', () => {
    req.end();
    let redirect_uri = encodeURIComponent("http://localhost:8081/auth")
    child_process(`exec open https://github.com/login/oauth/authorize?client_id=Iv1.375ef10b37e2d7a3&redirect_uri=${redirect_uri}&scope=read%3Auser&state=123abc`)
}) */






