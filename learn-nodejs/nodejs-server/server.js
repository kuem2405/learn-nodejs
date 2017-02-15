// Bước 1: Import module http
var http = require('http');
var fs = require('fs');

//Bước 2: Khởi tạo server
var server = http.createServer(function(request, response) {
    // Biến request: là biến lưu trữ thông tin gửi lên từ client
    // Biến reponse: là biến lưu trữ các thông tin trả về cho client

    // // Thiết lập Header
    // response.writeHead(200, {
    //     "Context-type" : "text/plain"
    // });

    // // Sau thông tin
    // response.write('Your URL is' + request.url);

    // Kiểm tra URL truy cập phải là trang about không
    if(request.url == '/about') {
        // Thiết lập Header
        response.writeHead(200, {
            "Context-type" : "text/html"
        });

        // Show thông tin trang about
        fs.createReadStream('./about.html').pipe(response);
    } else { // trường hợp ngược lại không tìm thấy file
        // Thiết lập Header
        response.writeHead('404', {
            "Context-type" : "text/plain"
        });

        // Show lỗi không tìm thấy
        response.write('404 Not Found' + request.url);
    
        //Kết thúc
        response.end();
    }
});

//Bước 3: Lắng nghe cổng 300 thì thực hiện chương trình
server.listen(3001, function(){
    console.log('Connected Successfull!');
});