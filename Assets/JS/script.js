// TODO java script structure 


//TODO create variables with a selection query that selects elements from the HTML doc

let randomButton = document.querySelector("#pickForMe");
 
 let randomCoffeeType =  ["Espresso", "Latte", "Cappuccino", "Mocha", "Americano"];
function pickRandomCoffee (randomCoffeeType) {
    // Get a random index
const randomIndex = Math.floor(Math.random() * randomCoffeeType.length);

// Use the random index to access an item in the array
let randomCoffee = randomCoffeeType[randomIndex];

console.log(randomCoffee);

return randomCoffee;
 };
 randomButton.addEventListener("click", () => pickRandomCoffee(randomCoffeeType));
//  addEventListener('click', pickRandomCoffee);

const coffee = {

    temp:  undefined,
    milk: undefined,
    type: undefined ,
    flavors: undefined

}


// TODO create other varibles possably needed for the code


// TODO create coffee to recomend object 

// TODO create method 

// TODOcreate event listener for button presses and call functions to run when event 