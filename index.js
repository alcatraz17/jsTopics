// console.log('This is tutorial 27');


// const car = {
//     name : "Maruti 800",
//     topSpeed : 100,
//     run : function() {
//         return `Car is running`;
//     }
// }

// console.log(car);
// console.log(car.run());
// console.log(car.name);

// Constructor

// Ceating a constructor for cars.

// function generalCar(name, topSpeed) {
//     this.name = name;
//     this.speed = topSpeed;
//     this.run = function () {
//         return `${this.name} is running`;
//     }
//     this.analyze = function () {
//         if (this.speed < 220) {
//             return `${this.name} is slower than Mercedes by ${220 - this.speed} kmph`;
//         } else {
//             return `${this.name} is faster than Mercedes by ${this.speed - 220} kmph`;
//         }
//     }
// }

// car1 = new generalCar('Nissan', 180);
// // console.log(car1.speed);
// // console.log(car1.run());

// car2 = new generalCar('Maruti Suzuki Alto', 120);
// // console.log(car2.name);
// // console.log(car2.speed);
// // console.log(car2.run());
// // console.log(car2.analyze());

// let car3 = new generalCar('Lamborghini', 350);
// console.log(car3.analyze());


// console.log(car1, car2, car3);


// // console.log("This is tutorial 28");

// // object literal : object.prototype

// //let obj = {
// //     name : "Naved",
// //     role : 'Developer',
// //     address : 'Ranchi'
// // }
// // console.log(obj);

// // Constructor function

// // function myObj (givenName, age) {
// //     this.name = givenName;
// //     this.age = age
// // }

// // prototype of constructor function can be changed and not of object literals. 
// // obj.prototype.printAge = function(){
// //     return `${this.age}`;
// // }

// // Object.prototype.getName = function(){         //We should not change object.prototype
// //     return `${this.name} + OOPS you have changed original object prototype and this will reflect for all new objects created`;
// // }

// // const obj3 = function(name, age, role){
// //     this.name = name;
// //     this.age = age;
// //     this.role = role;
// // }
// // let rajnish = new obj3("Rajnish", 25, "Developer");

// // // console.log(obj3.getName());

// // obj3.prototype.newName = function(newName){
// //     this.name = newName;
// // }
// // rajnish.newName("Naved");
// // console.log(rajnish);

// // let naved = new myObj('Naved', 25);
// // console.log(naved.printAge());
// // console.log(naved);
// // console.log(obj2.getName());

// const myObject = function(name, age, place, role){
//     this.name = name;
//     this.age = age;
//     this.place = place;
//     this.role = role;
// }
// //Creating an object prototype
// myObject.prototype.newName = function (newName){
//     this.name = newName;
//     return `${this.name} is the new name`;
// }
// myObject.prototype.newPlace = function(newPlace){
//     this.place = newPlace;
//     return `${this.place} is the new place`;
// }


// let naved = new myObject("Naved", 25, 'Ranchi', `Developer`);
// console.log(naved);
// naved.newName('Naved Anjum');
// naved.newPlace(`Bangalore`);
// console.log(naved);



// console.log('This is tut 30');
// function employee(name, age, role){
//     this.name = name;
//     this.age = age;
//     this.role = role;
//     employee.prototype.slogan = function(){
//         return `This is the best company, regards ${this.name}`
//     }

//     }
// }
// let naved = new employee("Naved", 25, "Developer");
// console.log(naved.slogan());
// naved.changeName('Hello Naved');
// console.log(naved);

// const proto = {
//     slogan : function(){
//         return `This company is the best`;
//     }
// }


// console.log("This is tutorial 34, about asynchronous programming");

// // async / await
// // callbacks
// // promises
// setTimeout(() => {
//     for (let index = 0; index < 10; index++) {
//         const element = index;
//         console.log(`This is index number ${index}`)
//     }
// }, 5000);

// console.log('Done printing!')

// console.log("This is tutorial 35, about ajax");
