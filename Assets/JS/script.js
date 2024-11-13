//TODO create variables with a selection query that selects elements from the HTML doc
const helpMePickButton = document.getElementById("helpMePick"); //Used for the Guide My Coffee Journey! button. 
const questionnaireSection = document.getElementById("questionnaire");
const randomButton = document.querySelector("#pickForMe"); // select the pick for me element in HTML 
const coffeeTypeSelect = document.getElementById("coffeeType").querySelector("select");
const tempOptionsSelect = document.getElementById("tempOptions").querySelector("select");
const milkOptionsSelect = document.getElementById("milkOptions").querySelector("select");
const flavorOptionsSelect = document.getElementById("flavorOptions").querySelector("select");

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
    'Skim Milk', 
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


  // this function should add elements and ammend them to the html page 
  function renderDropdownOptions() {
    // Define a helper function to populate a dropdown with options
    function populateSelect(selectElement, optionsArray) {
      // Clear any existing options before adding new ones
      selectElement.innerHTML = ""; 
      
      // Add a default option
      const defaultOption = document.createElement("option");
      defaultOption.textContent = "Select an option";
      defaultOption.value = ""; // empty value for default option 
      selectElement.appendChild(defaultOption);
  
      // Add each option from the optionsArray
      optionsArray.forEach(optionText => {
        const option = document.createElement('option');
        option.value = optionText; // sets the value attribute 
        option.textContent = optionText; // sets visible text
        selectElement.appendChild(option); // appends option to the dropDown
      });
    }
  
    // Populate each dropdown in the questionnaire with relevant options
    populateSelect(coffeeTypeSelect, coffeeTypes);      // Fill coffeeTypeSelect with coffee types
    populateSelect(tempOptionsSelect, tempOptions);      // Fill tempOptionsSelect with temperature options
    populateSelect(milkOptionsSelect, milkOptions);      // Fill milkOptionsSelect with milk options
    populateSelect(flavorOptionsSelect, coffeeFlavors);  // Fill flavorOptionsSelect with flavor options
  }





// Function to show or hide the questionnaire. Questionnaire is hidden by default and displays when the Guide My Coffee Journey button is clicked.
function toggleQuestionnaire() {
    if (questionnaireSection.classList.contains("hidden")) {
        questionnaireSection.classList.remove("hidden");
    } else {
        questionnaireSection.classList.add("hidden");
    }
    renderDropdownOptions();
}

// EvenListener that displays the Questionnaire when clicking Guide My Coffee Journey!
helpMePickButton.addEventListener("click", toggleQuestionnaire);


// This is for the modal to pop up
const myModal = document.getElementById('myModal')
const myInput = document.getElementById('myInput')

myModal.addEventListener('shown.bs.modal', () => {
  myInput.focus()
})

