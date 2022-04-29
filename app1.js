//20220427
const http = require('http');/* require: 어플리케이션에 필요한 모듈을 불러오기 */
const fs = require('fs');/* 파일 서버로서의 node.js : html과 연결하여 사용하자! => https://www.w3schools.com/nodejs/nodejs_filesystem.asp */

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => { /* (req:요청, res:받음) */
  //res.statusCode = 200;/* 성공 */
  res.writeHead(200, {'Content-Type': 'text/html'});
  const data = fs.readFile('./test.html'
    //res.end(data);
  );
  res.end(data);
/*
  fs.readFile("test.html", (err,data)=>{
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write(data);
    return res.end();
  });*/
  
  /* 
  res.setHeader('Content-Type', 'text/html; charset=utf-8');
  res.write('<h1>node start111</h1>');
  res.write('<h2>노드 시작!!</h2>');
  res.end('node start222');
  res.write(" <p>큰따옴표로 묶은 문단 '노드'</p> ");
  res.write(' <p>작은따옴표로 묶은 문단 "노드"</p> ');
  */
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});