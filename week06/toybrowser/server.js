const http = require('http');
const server = http.createServer((req, res)=>{
  console.log('request received');
  console.log(req.headers);
  res.setHeader('Content-Type', 'text/html');
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.end(
  `<html maaa=a >
  <head>
      <style>
  body div #myid{
      width:100px;
      background-color: #ff5000;
  }
  body div img{
      width:30px;
      background-color: #ff1111;
  }

  body .bg.test{
      height: 200px;
      color: red;
  }
  body .test{
      background: yellow;
      color: green;
  }
      </style>
  </head>
  <body>
      <div class="test bg">
          <img id="myid"/>
          <img />
      </div>
      <div class="test">
      </div>
  </body>
  </html>`
  );
})
server.listen(8088);