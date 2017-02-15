// var yargs = require('yargs');

// // Lấy hết tham số
// var argv = yargs.argv;

// // In ra xem thử
// console.log(argv);

// Hàm kiểm tra số nguyên tố
// function kiem_tra_snt(n) {
//     // Biến cờ hiệu
//     var flag = true;

//     // Nếu n bé hơn 2tức là không phải số nguyên tố
//     if (n < 2) {
//         flag = false;
//     } else if (n == 2) {
//         flag = true;
//     } else if (n % 2 == 0) {
//         flag = false;
//     } else {
//         // Lặp từ 3 tới n-1 với bước nhảy là 2 (i+=2)
//         for (var i = 3; i < n-1; i+=2) {
//             if (n % i == 0){
//                 flag = false;
//                 break;
//             }
//         }
//     }
//     return flag;
// }

// // Main Code
// var yargs = require('yargs');
// var manager_students = import('./node-persist');

// var argv = yargs.argv;

// if (typeof argv.n == 'undefined') {
//     console.log('Bạn chưa nhập n');
// } else {
//     if(kiem_tra_snt(argv.n)) {
//         console.log('Là số nguyên tố');
//     } else {
//         console.log('Không phải là số nguyên tố');
//     }
// }
/*THƯ VIỆN STUDENT*/
var storage = require('node-persist');
 
storage.initSync({
    dir : "mydata",
    ttl : false
});
 
function getAllStudents()
{
    var students = storage.getItemSync('students');
    if (typeof students === "undefined"){
        return [];
    }
     
    return students;
}
 
 
function showStudents()
{
    var students = getAllStudents();
    for (var i = 0; i < students.length; i++)
    {
        console.log('Student: ' + students[i].fullname + "(" +students[i].id+ ")");
    }
}
 
function addStudent(studentId, studentName)
{
    var students = getAllStudents();
    students.push({
        id: studentId,
        fullname : studentName
    });
     
    storage.setItemSync('students', students);
}
 
function removeStudent(studentId)
{
    var students = getAllStudents();
     
    for (var i = 0; i < students.length; i++)
    {
        if (students[i].id === studentId){
            students.splice(i, 1);
        }
    }
     
    storage.setItemSync('students', students);
}
 
function editStudent(studentId, studentName)
{
    var students = getAllStudents();
     
    for (var i = 0; i < students.length; i++)
    {
        if (students[i].id === studentId){
            students[i].fullname = studentName;
        }
    }
     
    storage.setItemSync('students', students);
}
 
 
/*OPTIONS ACTION*/
var yargs = require('yargs');
 
var argv = yargs
                .command("list", "Get List Student", function(yargs){
                    // Nothing
                })
                .command('create', 'Create a Student', function(yargs){
                    return yargs.options({
                        id : {
                            demand : true,
                            type : "number"
                        },
                        fullname : {
                            demand : true,
                            type : "string"
                        }
                    });
                })
                .command('delete', 'Delete a Student', function(yargs){
                    return yargs.options({
                        id : {
                            demand : true,
                            type : "number"
                        }
                    });
                })
                .command('edit', 'Edit a Student', function(yargs){
                    return yargs.options({
                        id : {
                            demand : true,
                            type : "number"
                        },
                        fullname : {
                            demand : true,
                            type : "string"
                        }
                    });
                })
                .argv;
 
/*XỬ LÝ ACTION*/
// Lấy tên action
var action = argv._[0];
 
if (action === 'list'){
    showStudents();
}
else if (action === 'create'){
    addStudent(argv.id, argv.fullname);
    console.log('Add Successfully!');
    showStudents();
}
else if (action === 'delete'){
    removeStudent(argv.id);
    console.log('Delete Successfully!');
    showStudents();
}
else if (action === 'edit'){
    editStudent(argv.id, argv.fullname);
    console.log('Edit Successfully!');
    showStudents();
}
else{
    console.log('Command not found!');
    showStudents();
}