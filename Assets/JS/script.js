// TODO java script structure 

//TODO create variables with a selection query that selects elements from the HTML doc

const randomButton = document.querySelector("#pickForMe"); // select the pick for me element in HTML 
let randomCoffeeType =  ["Espresso", "Latte", "Cappuccino", "Mocha", "Americano"]; // array of coffee types 





function addDropDownMenu(array) {

}

function pickRandomCoffee (randomCoffeeType) {
    // Get a random index and store it 
const randomIndex = Math.floor(Math.random() * randomCoffeeType.length);
// Use the random index to access an item in the array
const randomCoffee = randomCoffeeType[randomIndex];
console.log(randomCoffee);
return randomCoffee;
 }
  
 // add event listener for the random button 
 randomButton.addEventListener("click", () => pickRandomCoffee(randomCoffeeType));

// object 
const coffee = {

    name: undefined,
    temp:  undefined,
    milk: undefined,
    type: undefined ,
    flavors: undefined

}


// TODO create other varibles possably needed for the code


// TODO create coffee to recomend object 

// TODO create method 

// TODOcreate event listener for button presses and call functions to run when event happens 