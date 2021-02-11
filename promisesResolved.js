console.log("This is tutorial 39 about promises and it being resolved");
// Preten that this response is coming from the server

const students = [{ name: "Naved", role: "Developer", place: "Bangalore" },
{ name: "Rajnish", role: "Senior Developer", place: "Bangalore" }];

function enrollStundents(student) {
    return new Promise(function (resolve, reject) {
        const error = false;
        if (!error) {
            console.log("Promise resolved");
            resolve();
            setTimeout(function () {
                students.push(student);
                console.log("Student has been enrolled");
            }, 4000);
        } else {
            reject()
            console.log("Some error occured")
        }
    })
}
    function getStudents() {
        setTimeout(function () {
            let str = "";
            students.forEach(function (student) {
                str += `<li>${student.name}</li>`
            });
            document.getElementById('students').innerHTML = str;
            console.log("Students have been fetched");
        }, 4000);
    };

    let newStudent = { name: "Sunny", subject: "Python" }
    enrollStundents(newStudent).then(getStudents).catch(function(){
        console.log("SOme error occured");
})