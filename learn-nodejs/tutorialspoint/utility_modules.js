// var os = require("os");

// // Endianness
// console.log('endianness : ' + os.endianness());

// // OS type
// console.log('type : ' + os.type());

// // OS platform
// console.log('platform : ' + os.platform());

// // Total system memory
// console.log('total memory : ' + os.totalmem() + " bytes.");

// // Total free memory
// console.log('free memory : ' + os.freemem() + " bytes.");

// // Get a list of network interfaces
// console.log('network : ' + os.networkInterfaces() );
// // Server
// var net = require('net');
// var server = net.createServer(function(connection) { 
//    console.log('client connected');
   
//    connection.on('end', function() {
//       console.log('client disconnected');
//    });
//    connection.write('Hello World!\r\n');
//    connection.pipe(connection);
// });
// server.listen(8080, function() { 
//    console.log('server is listening');
// });

// Client
var net = require('net');
var client = net.connect({port: 8080}, function() {
   console.log('connected to server!');  
});
client.on('data', function(data) {
   console.log(data.toString());
   client.end();
});
client.on('end', function() { 
   console.log('disconnected from server');
});