console.log("This is tutorial 41 about arrow functions");

///////// ARROW FUNCTIONS /////

//// creating a normal function
const navedRegular = function(){
    return `Naved is learning arrow functions after this!!`
}

//// Converting it to arrow functions
const navedArrow = () => `Naved has learnt about arrow functions;`

// console.log(navedRegular());
// console.log(navedArrow());

//// Returning objects //
// const data = () => ({name: "Naved", role : "Developer", place: "Bangalore"});
// console.log(data());

const greet = (name) => `Good morning ${name}`;
const greet2 = name => "Good morning " +name;
console.log(greet2("Naved"));