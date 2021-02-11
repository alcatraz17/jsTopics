console.log('This is tutorial 35, about ajax')
let fetchBtn = document.getElementById("fetchBtn");
fetchBtn.addEventListener('click', buttonClickHandler)

function buttonClickHandler() {
    console.log("YOu have cliked the fetchBtn");
    //Instantiate an xhr object
    const xhr = new XMLHttpRequest();
    
    // Open the object
    // xhr.open('GET', 'https://jsonplaceholder.typicode.com/todos/1', true);
    // use this for POST request
    xhr.open('POST', 'http://dummy.restapiexample.com/api/v1/create', true);
    xhr.getAllResponseHeaders('Content-type', 'application/json');
    
    //What to do on progress
    xhr.onprogress = function (){
        console.log("On progress");
    }
    // // When state is changed.
    // xhr.onreadystatechange = function (){
    //     console.log('Ready state is ', xhr.readyState);
    // }
    //What to do when response is ready
    xhr.onload = function () {
        if(this.status === 200){
            console.log(this.responseText)
        } else {
            console.log("Some error occured");
        }
    }

    //Send the request
    params = `{"name":"test420","salary":"123","age":"23"}`
    xhr.send(params);
    console.log("We are done!");
}

//  http://dummy.restapiexample.com/api/v1/employees

let popBtn = document.getElementById('popBtn');
popBtn.addEventListener('click', popHandler);
function popHandler(){
    console.log("YOu have cliked the pop handler");
    //Instantiate an xhr object
    const xhr = new XMLHttpRequest();
    
    // Open the object
    xhr.open('GET', 'http://dummy.restapiexample.com/api/v1/employees', true);
    
    //What to do when response is ready
    xhr.onload = function () {
        if(this.status === 200){
            let obj = JSON.parse(this.responseText);
            console.log(obj);
            let list = document.getElementById('list');
            str = '';
            for (key in obj){
                str += `<li>${obj[key].id}</li>`;
            }
            list.innerHTML = str;
        } else {
            console.log("Some error occured");
        }
    }

    //Send the request
    params = `{"name":"test420","salary":"123","age":"23"}`
    xhr.send(params);
    console.log("We are done!");
}
