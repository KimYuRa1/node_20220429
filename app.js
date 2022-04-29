// 개념정리 > 서버프로그램구현 참고

const http = require('http');/* require: 어플리케이션에 필요한 모듈을 불러오기 */

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => { /* (req:요청, res:받음) */
  res.statusCode = 200;/* 성공 */
  res.setHeader('Content-Type', 'text/plain');
  res.write('node start111 ');/* 출력 */
  res.end('node start222');/* 출력 */
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});