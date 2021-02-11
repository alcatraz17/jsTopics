const companies = [
  { name: "Company One", category: "Finance", start: 1981, end: 2004 },
  { name: "Company Two", category: "Retail", start: 1992, end: 2008 },
  { name: "Company Three", category: "Auto", start: 1999, end: 2007 },
  { name: "Company Four", category: "Retail", start: 1989, end: 2010 },
  { name: "Company Five", category: "Technology", start: 2009, end: 2014 },
  { name: "Company Six", category: "Finance", start: 1987, end: 2010 },
  { name: "Company Seven", category: "Auto", start: 1986, end: 1996 },
  { name: "Company Eight", category: "Technology", start: 2011, end: 2016 },
  { name: "Company Nine", category: "Retail", start: 1981, end: 1989 },
];

const ages = [33, 12, 20, 16, 5, 54, 21, 44, 61, 13, 15, 45, 25, 64, 32];

/////////////////// forEach function ////////////////////////////////
// companies.forEach( (company, index) => {
//   console.log(`Index is ${index}`, company.start, `   Company * 100 : ${company.start*100}`)
// })

/////////////////////// filter function //////////////////////////////

// let canDrink = [];
// for (let i = 0; i < ages.length; i++) {
//   if (ages[i] >= 21){
//     canDrink.push(ages[i]);
//   }
// }

// console.log(canDrink);

// const canDrink = ages.filter( (age) => {
//   if( age >= 21) {
//     return true;
//   }
// })

// const canDrink = ages.filter( (element) => element >= 21)
// const canDrink = ages.filter( age => age >= 21)
// console.log(canDrink);

//// Filter retail companies

// const retailCOmpanies = companies.filter( company => company.category === "Retail")

// console.log(retailCompanies);

// //Using forEach, listing the name
// retailCOmpanies.forEach( company => console.log(company.name))

//// Using map, listing the name
// retailCOmpanies.map( (compName) => {
//   console.log(compName.name)
// })

//// Filter all the companies of 80s

// const eighties = companies.filter( company => company.start >= 1980 && company.start < 1990 )

// console.log(eighties)

//// Filter companies that lasted more than 10 years

// const decadeComp = companies.filter( company => company.end - company.start >= 10)
// // console.log(deadeComp)

// decadeComp.map( (compName) =>
//   console.log(`${compName.name} lasted from ${compName.start} and existed till ${compName.end}`)
// )

////////////////////////////// Map function ////////////////////////

// const rootAge = ages.map( age => Math.sqrt(age) );
// console.log(rootAge)

// const squareAge = ages.map( age => Math.pow(age, 2));
// console.log(squareAge);

//////////////////////////// Sort //////////////////////////////////

// const sortedCompanies = companies.sort((c1, c2) => {
//   if (c1.start > c2.start) {
//     return 1;
//   } else {
//     return -1;
//   }
// });

// const sortedCompanies = companies.sort((a, b) => (a.start > b.start ? 1 : -1));

// console.log(sortedCompanies);

// const ageSort = ages.sort( (a, b) => (a > b? 1 : -1))
// const ageSort = ages.sort( (a, b) => a - b)

// console.log(ageSort);

/////////////////////////////// reduce /////////////////////////////

// const ageSum = ages.reduce( (total, age) => total + age, 0)

// console.log(ageSum);

// const totalYearsOfComp = companies.reduce( (total, company) => total + (company.end - company.start), 0
// )

// console.log(totalYearsOfComp);

///////// Combining methods ///////////////

const twiceAge = ages
  .map((age) => age * 2)
  .filter((age) => age >= 40)
  .sort((a, b) => (a > b ? 1 : -1))
  .reduce( (totalAge, age) => totalAge + age, 0);

console.log(twiceAge);
