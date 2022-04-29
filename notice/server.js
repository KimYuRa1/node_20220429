const http = require('http');
const fs=require('fs');
const port = 3000;
var server = http.createServer((req,res)=>{//웹서버 객체를 만듦.
    var url = req.url;

    if( req.url == "/"){
        url="/index.html";
    }
    if( req.url == "/favicon.ico" ){
        return res.writeHead(404);
    }
    res.writeHead(200);
    res.end( fs.readFileSync(__dirname + url) );
})


server.listen(port, () => {
    console.log(`Server running at http://localhost:${port}/`);
  });
