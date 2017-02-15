var crypto = require('crypto-js');

// Mã hóa
var message = crypto.AES.encrypt('Nội dung cần mã hóa', 'Mã bí mật').toString();

// Xem chuỗi đã mã hóa
console.log(message);

//Lấy danh sách byte đã mã hóa
var bytes = crypto.AES.decrypt(message, 'Mã bí mật');

//Chuyển sang chuỗi gốc
var message_decode = bytes.toString(crypto.enc.Utf8);

console.log(message_decode);