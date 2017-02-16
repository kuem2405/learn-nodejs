// const net = require('net');
// const repl = require('repl');
// var connections = 0;

// repl.start({
//   prompt: 'Node.js via stdin> ',
//   input: process.stdin,
//   output: process.stdout
// });

// net.createServer((socket) => {
//   connections += 1;
//   repl.start({
//     prompt: 'Node.js via Unix socket> ',
//     input: socket,
//     output: socket
//   }).on('exit', () => {
//     socket.end();
//   })
// }).listen('/tmp/node-repl-sock');

// net.createServer((socket) => {
//   connections += 1;
//   repl.start({
//     prompt: 'Node.js via TCP socket> ',
//     input: socket,
//     output: socket
//   }).on('exit', () => {
//     socket.end();
//   });
// }).listen(5001);
var http = require('http')
  , repl = require('repl')
  , buf0 = new Buffer([0])

var server = http.createServer(function (req, res) {
  res.setHeader('content-type', 'multipart/octet-stream')

  res.write('Welcome to the Fun House\r\n')
  repl.start({
      prompt: 'curl repl> '
    , input: req
    , output: res
    , terminal: false
    , useColors: true
    , useGlobal: false
  })

  // log
  console.log(req.headers['user-agent'])

  // hack to thread stdin and stdout
  // simultaneously in curl's single thread
  var iv = setInterval(function () {
    res.write(buf0)
  }, 100)

  res.connection.on('end', function () {
    clearInterval(iv)
  })
})
server.listen(8000)