
//!Dog Age Pracitce
// const calculateAgeInDogYears = (ageOfPerson) => {
//         const ageInDogYears = ageOfPerson / 7

//         return ageInDogYears

// }
// const dogAge = calculateAgeInDogYears (45)

// console.log(dogAge)

//!Favorite Breed Practice
// const favDog = (breedName) => {
//     //assign variable
//     const myFave = breedName
//     //if "meow",return I love Cats
//     if (breedName === "meow"){
//         return "I love Cats"
//     }
//     //return result
//     return myFave

// }

// const dogFave = favDog("meow")



// console.log(`My favorite breed is ${dogFave}.`)

//!Addition Practice
// const add = (one, two,three) => {
//     const sum = one+two+three
//     return sum
// }

// const addSum = add(17,11,4)

// console.log(addSum)

//!EvensOrOdds
// const numberArray = [4,9,10,0,11,2,3]

// const evenOrOdd = (number) => {

//     //check if number is even, return string
//     if (number % 2 === 0) {
//         return `${number} is Even`
//     }
//     //check if number is odd, return string
//     else {
//         return `${number} is Odd`
//     }
// }

// // const oddCheck = evenOrOdd(15)
// // console.log(oddCheck)
// for (const number of numberArray) {
//         console.log(evenOrOdd(number))
// }


//!Self-driving Cars
// const go = (direction, speed) => {

//     if (speed > 75) {
//         return `The car is moving ${direction} at ${speed} mph. SLOW DOWN`
//     }



//     return `The car is moving ${direction} at ${speed} mph`
// }

// const speeding = go("backwards",50)
// console.log(speeding)

//!Did sven catch a fish????
// const svenFish = () => {
//     if (Math.random()*100 > 50) {
//         return "sven hooked a fish :)"
//     }
//     else {
//         return "sven came back empty handed :("
//     }


// }
// const fish = svenFish()
// console.log (fish)

//!Fast Food Practice
// const orderMeal = (sandwich,side,drink,dessert) => {
//     return {
//         "sandwich": sandwich,
//         "side": side,
//         "drink": drink,
//         "dessert": dessert

//     }
// }

// const takeOutBag = orderMeal("Ultimate Slammer", "Fudge sundae", "Mr. Pepper", "Potato wedges")
// console.log(takeOutBag)

//!same Chores,different days


//*define a name as a string from an object
// const guy = person => {

//     person = {
//         firstName: "Donald",
//         lastName: "McLellan"
//     }
//     return `${person.firstName} ${person.lastName}`
// }

//*lazy day planner thing

// const chore = (day) =>{
//     if (day === "Monday") {
//         return `mowed the lawn`
//     }else if(day === "Tuesday") {
//         return `the dishes`
//     }else if(day === "Wednesday") {
//         return `order groceries`
//     }else if(day === "Thursday") {
//         return `worked out`
//     }else if(day === "Friday") {
//         return `baseball practice`
//     }else if(day === "Saturday") {
//         return `cleaned the house`
//     }else if(day === "Sunday") {
//         return `did a service project`
//     }
// }

// const dayPlanner = (chore,guy,day) => {
//     return `The day is ${day}, today ${guy} will ${chore}`
// }
// console.log(dayPlanner(chore("Thursday"), guy(), "Thursday"))

// //*busy day deal

// const firstChore = chore("Tuesday")
// const secondChore = chore("Saturday")
// const thirdChore = chore("Monday")

// const busyDayPlanner = (firstChore,secondChore,thirdChore,guy,day) => {
//     return `On ${day}, ${guy} did ${firstChore}, and ${secondChore}, and ${thirdChore}.`
// }
// console.log(busyDayPlanner(firstChore,secondChore,thirdChore,guy(), "Wednesday"))


//!Scope practice
// //*C is for Cookie
// const cookies = ["Oatmeal Raisin", "Chocolate Chip", "Sugar", "Peanut Butter", "Snickerdoodle", "Ginger"]
// let x = 1

// for (let i = 0; i < cookies.length; i++) {
//     const currentCookie = cookies[x]
//     console.log(`Mmmmmmm... that's a good ${currentCookie} cookie`)
// }

//!conjunction function

// const conjunction = function (firstWord, secondWord) {
//     const conjoinedWord = `${firstWord} ${secondWord}`
//     console.log(conjoinedWord)
// }

// conjunction("Master", "Card")

//! Mod Squad

// {
//     const modSquad = {
//         "members": ["Pete Cochran", "Linc Hayes", "Julie Barnes", "Capt. Adam Greer", "Chief Barney Metcalf"],
//         "series": {
//             "start": "1968",
//             "end": "1973"
//         }
//     }

//     let HTMLRepresentation = `<h1>The Mod Squad</h1>`

//     modSquad.members.forEach(member => {
//          HTMLRepresentation += 
//          ` <div>${member}</div> `
//     })
//     console.log(HTMLRepresentation)
// }

//! Simon Says

// const locations = [[1,1], [1,2], [1,3], [2,1], [2,2], [2,3]]

// for (const location of locations) {
    
//     if (location[1] > 2) {
//         const invalidLocation = true
//         if (invalidLocation) {
//             console.log("This location is invalid")
            
//         }
//     }
// }
// console.log(locations)