const http = require('http');
const fs = require('fs');
const querystring = require('querystring');
const archiver = require('archiver');

//const postData = querystring.stringify({ 'content': 'hello World 23333' });

let packname = './package';
/* fs.stat(packname, (error, stat) => { */
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
})

    // Write data to request body

/* let readStream = fs.createReadStream(packname);
readStream.pipe(req);
readStream.on('end', ()=>{
    req.end();
}) */
/* }) */





