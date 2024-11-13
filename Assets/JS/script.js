//TODO create variables with a selection query that selects elements from the HTML doc
const helpMePickButton = document.getElementById("helpMePick"); //Used for the Guide My Coffee Journey! button. 
const questionnaireSection = document.getElementById("questionnaire");
const randomButton = document.querySelector("#pickForMe"); // select the pick for me element in HTML 
// let randomCoffeeType =  ["Espresso", "Latte", "Cappuccino", "Mocha", "Americano"]; // array of coffee types

// function pickRandomCoffee (randomCoffeeType) {
//     // Get a random index and store it 
// const randomIndex = Math.floor(Math.random() * randomCoffeeType.length);
// // Use the random index to access an item in the array
// const randomCoffee = randomCoffeeType[randomIndex];
// console.log(randomCoffee);
// return randomCoffee;
//  }
  
// //  add event listener for the random button 
//  randomButton.addEventListener("click", () => pickRandomCoffee(randomCoffeeType));

// // object 
// const coffee = {

//     name: undefined,
//     temp:  undefined,
//     milk: undefined,
//     type: undefined ,
//     flavors: undefined
// }

//arrays of coffee types, flavors, milk options, and temperature options
const coffeeTypes = [
    'Americano', 
    'Latte', 
    'Drip Coffee', 
  ];

  const coffeeFlavors = [
    'Vanilla', 
    'Caramel', 
    'Chocolate', 
  ];

  const milkOptions = [
    'Skim Millk', 
    '2% Milk', 
    'Oat Milk', 
  ];

  const tempOptions = [
    'Hot', 
    'Iced', 
    'Blended', 
  ];

  function getRandomChoice(array) {
    const randomIndex = Math.floor(Math.random() * array.length);
    return array[randomIndex];
  }

  // generate random coffee
  function generateCoffee() {
    const milk = getRandomChoice(milkOptions);
    const coffeeType = getRandomChoice(coffeeTypes);
    const flavor = getRandomChoice(coffeeFlavors);
    const temperature = getRandomChoice(tempOptions);

    // result string
    const result = `FRESH BREWED: ${tempOptions} ${coffeeFlavors} ${coffeeTypes} with ${milkOptions}`;
    document.getElementById('coffee-result').innerHTML = result;
  }

  // Event listener to trigger the coffee generation when button is clicked
  document.getElementById('generate-coffee').addEventListener('click', generateCoffee);





// function addDropDownMenu(array) {

// }

// TODO create other variables possibly needed for the code


// TODO create coffee to recommend object 

// TODO create method 

// TODO create event listener for button presses and call functions to run when event 


// Function to show or hide the questionnaire. Questionnaire is hidden by default and displays when the Guide My Coffee Journey button is clicked.
function toggleQuestionnaire() {
    if (questionnaireSection.classList.contains("hidden")) {
        questionnaireSection.classList.remove("hidden");
    } else {
        questionnaireSection.classList.add("hidden");
    }
}

// EvenListener that displays the Questionnaire when clicking Guide My Coffee Journey!
helpMePickButton.addEventListener("click", toggleQuestionnaire);
