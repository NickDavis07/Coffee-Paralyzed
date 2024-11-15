//TODO create variables with a selection query that selects elements from the HTML doc
const helpMePickButton = document.getElementById("helpMePick"); //Used for the Guide My Coffee Journey! button. 
const questionnaireSection = document.getElementById("questionnaire");
const randomButton = document.querySelector("#pickForMe"); // select the pick for me element in HTML 
const coffeeTypeSelect = document.getElementById("coffeeType").querySelector("select");
const tempOptionsSelect = document.getElementById("tempOptions").querySelector("select");
const milkOptionsSelect = document.getElementById("milkOptions").querySelector("select");
const flavorOptionsSelect = document.getElementById("flavorOptions").querySelector("select");

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


  console.log(coffeeTypes);
  console.log(coffeeFlavors);
  console.log(milkOptions);
  console.log(tempOptions);

  function getRandomChoice(array) {
    const randomIndex = Math.floor(Math.random() * array.length);
    return array[randomIndex];
  }

  // Global variable to store the last generated coffee choice
  let result = "";

  // generate random coffee
  function generateCoffee() {
    const milk = getRandomChoice(milkOptions);
    const coffeeType = getRandomChoice(coffeeTypes);
    const flavor = getRandomChoice(coffeeFlavors);
    const temperature = getRandomChoice(tempOptions);

    // result string
    result = `A ${temperature} ${flavor} ${coffeeType} with ${milk}. Enjoy!`;
    document.getElementById('coffee-result').innerHTML = result;
  }

  // Event listener to trigger the coffee generation when button is clicked
  document.getElementById('generate-coffee').addEventListener('click', generateCoffee);

  //Utilizes getRandomChoice with the || operator to provide a random choice from the respective array if the option selected is falsy. 
  // This only occurs if the default option is selected which is Surprise Me!
  function generateSelectedCoffee() {
    const coffeeType = coffeeTypeSelect.value || getRandomChoice(coffeeTypes);
    const temperature = tempOptionsSelect.value || getRandomChoice(tempOptions);
    const milk = milkOptionsSelect.value || getRandomChoice(milkOptions);
    const flavor = flavorOptionsSelect.value || getRandomChoice(coffeeFlavors);

    result = `A ${temperature} ${flavor} ${coffeeType} with ${milk}. Enjoy!`;
    document.getElementById('coffee-result').innerHTML = result;
}

// Event listener for Brew button
document.getElementById('brewButton').addEventListener('click', generateSelectedCoffee);

// Save to local storage when "Save Changes" button is clicked in the modal
document.getElementById('saveCoffeeBtn').addEventListener('click', () => {

  // This is for the fill in for the star
  const star = document.getElementById("favoriteStar");
  star.classList.toggle("filled");
  star.classList.toggle("bi-star");
  star.classList.toggle("bi-star-fill");
  // Saving to Local Storage 
  if (result) {
      localStorage.setItem("savedCoffee", result);
      console.log(result) // did this to make sure it was working 
  }
});

// Reset star when modal is closed
document.getElementById("exampleModal").addEventListener("hidden.bs.modal", function () {
  const star = document.getElementById("favoriteStar");
  star.classList.remove("filled", "bi-star-fill");
  star.classList.add("bi-star");
});

  // this function should add elements and ammend them to the html page 
  function renderDropdownOptions() {
    // Define a helper function to populate a dropdown with options
    function populateSelect(selectElement, optionsArray) {
      // Clear any existing options before adding new ones
      selectElement.innerHTML = ""; 
      
      // Add a default option
      const defaultOption = document.createElement("option");
      defaultOption.textContent = "Surprise me!"; //Changed the text here to Surprise me as the default for the drop downs. This looks more fun and friendly than No Preference.
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

//Commented out the below code. This was providing the error Uncaught SyntaxError: Unexpected identifier 'is' (at script.js:119:6). 
//It doesn't seem to do anything, I'm assuming this was linked to something previously. Kept the code in comment incase I'm missing something.

//This is for the modal to pop up
// const myModal = document.getElementById('myModal')
// const myInput = document.getElementById('myInput')

// myModal.addEventListener('shown.bs.modal', () => {
//   myInput.focus()
// })