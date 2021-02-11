
// Preten that this response is coming from the server
const students = [
    {"name" : "Naved", "subject" : "Javascript"},
    {"name" : "Rajnish", "subject" : "Mchine Learning"}
]



function enrollStundents(student, callback){
    setTimeout(function() {
        students.push(student);
        console.log("Student has been enrolled");
        callback();
    }, 4000);
};

function getStudents(){
    setTimeout(function() {
        let str = "";
        students.forEach(function(student){
            str += `<li>${student.name}</li>`
        });
        document.getElementById('students').innerHTML = str;
        console.log("Students have been fetched");
    }, 4000);
};

let newStudent = {name: "Sunny", subject: "Python"}
enrollStundents(newStudent, getStudents);
// getStudents();