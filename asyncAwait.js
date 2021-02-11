console.log("This is tutorial 43 about async await");

async function naved(){
    await console.log("Inside Naved");
    const response = await fetch('https://api.github.com/users');
    console.log('Before response')
    const users = await response.json();
    return users;
}

console.log("Before calling Naved");
let a = naved();
console.log('After calling Naved');
console.log(a);
a.then(data => console.log(data))
console.log("Last line of this JS file")