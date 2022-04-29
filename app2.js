const res = require('express/lib/response');
const http = require('http');
const server= http.createServer();
//웹서버 제작

const port  = 5200;

server.listen(port, function(){
    console.log("웹서버가 시작되었습니다.");
});

server.on('connection', function(){
    console.log("사용자가 접속했습니다.");
});

server.on('request', (req,res)=>{
    console.log("클라이언트 요청이 들어왔습니다.")
    res.writeHead(200, {"Content-Type": "text/html; charset=utf-8"});
    res.write('<!DOCTYPEhtml>');
    res.write('<html>');
    res.write('<head>');
    res.write('<title>응답</title>');
    res.write('</head>');
    res.write('<body>');
    res.write('<h1>node</h1>');
    res.write('</body>');
    res.write('</html>');
    res.end();
});

server.on('close',function(){
    console.log("서버가 종료되었습니다.");
})