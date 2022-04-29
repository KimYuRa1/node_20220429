const res = require('express/lib/response');
const http = require('http');
const fs=require('fs');
const server= http.createServer();
//웹서버 제작

const port  = 5200;

server.listen(port, function(){
    console.log(`웹서버가 시작되었습니다.  : http://localhost:${port}`);
});

server.on('connection', function(){
    console.log("사용자가 접속했습니다.");
});

server.on('request', (req,res)=>{
    console.log("클라이언트 요청이 들어왔습니다.")
    /* app3_img.jpg 파일 불러옴 */
    var imgfile =  'app3_img.jpg';/* 이미지 파일 선언 */
    fs.readFile(imgfile,(err,data)=>{
        res.writeHead(200, {"Content-Type": "image/jpg"}); 
        res.write(data);
        res.end();
    })
});

server.on('close',function(){
    console.log("서버가 종료되었습니다.");
})