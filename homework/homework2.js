//=================Exercise #1 ============================//

/* Write a function that parses through the below object 
and displays all of their favorite food dishes as shown*/

let person3 ={
    pizza:["Deep Dish", "South Side Thin Crush"], 
    tacos: "Anything not from Taco Bell", 
    burgers: "portillos Burgers",
    ice_cream: ["Chocolate", "Vanilla", "Oreo"],
    shakes:[{
        oberwise: "Chocolate",
        dunkin: "Vanilla",
        culvers: "All of them", 
        mcDonalds: "Sham-rock-shake",
        cupids_candies: "Chocolate Malt"
    }]
}

function favoriteFoods(){
    for (let key in person3){
        if (Array.isArray(person3[key])){
            for (let item of value){
                if (typeof item !=='object'){
                    console.log(`Their favorite ${key} is ${item}`)
                }
            }
            console.log(person3[key]);
        }
    }
}
favoriteFoods(person3)

//==================exercise #2====================//
/* write an object prototype for a person that has a name and age, has a printInfo 
method, and also has a method that increments the persons age by 1 each time the 
method is called. Create two people using the 'new' keyword, and print both of their
infos and increment on persons age by 3 years. Use an arrow function for both methods*/

class New{
    constructor(name, age){
        this.name = name
        this.age = age
    }
    printInfo = () => `${this.name} is ${this.age} years old`
    addYear = () => {
        this.age++
        return this.age
    }
}

let vanessa = new New('Vanessa', 30)
let frankie = new New('Frankie', 1)
console.log(vanessa.printInfo)
console.log(frankie.printInfo)
console.log(vanessa.addYear())
console.log(vanessa.addYear())
console.log(vanessa.addYear())

//=====================exercise #3==========================// 
/* create a promised based function that will check a string to determine if 
it's length is greater than 10. If the length is greater than ten console log 
"big word". If the length of the string is less than 10 console log "small number"*/

let stringLength = (str) => {
    return new Promise(
        (resolve, reject) =>{
            if (str.length >=10){
                resolve (console.log('Big Word'))
            }else (word.length <=10)
                resolve (console.log('Small word'))
        }
                )
            }
console.log(stringLength)