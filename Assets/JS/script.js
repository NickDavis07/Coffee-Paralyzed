//TODO create variables with a selection query that selects elements from the HTML doc
const helpMePickButton = document.getElementById("helpMePick"); //Used for the Guide My Coffee Journey! button. 
const questionnaireSection = document.getElementById("questionnaire");
const randomButton = document.querySelector("#pickForMe"); // select the pick for me element in HTML 
const coffeeTypeSelect = document.getElementById("coffeeType").querySelector("select");
const tempOptionsSelect = document.getElementById("tempOptions").querySelector("select");
const milkOptionsSelect = document.getElementById("milkOptions").querySelector("select");
const flavorOptionsSelect = document.getElementById("flavorOptions").querySelector("select");
const favoriteButton = document.querySelector("#favButton");


// Log the initial state of savedFavorite

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



let savedFavorite = JSON.parse(localStorage.getItem("savedFavorite")) || [];


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

  result = `A ${temperature} ${flavor} ${coffeeType} with ${milk}. Enjoy!`;
    document.getElementById('coffee-result').innerHTML = result;
}

// Event listener to trigger the  random coffee generation when button is clicked
document.getElementById('generate-coffee').addEventListener('click', generateCoffee);

//  event listenener that will save the add result to favortites array 
document.getElementById('saveCoffeeBtn').addEventListener('click', () => {
  if (result) { // Check if result is not an empty string
    savedFavorite.push(result); // Add result to savedFavorite array
    localStorage.setItem("savedFavorite", JSON.stringify(savedFavorite)); // Store updated array in local storage
    alert("Your coffee choice has been saved to favorites!"); // Confirmation message
    console.log(savedFavorite); // Log the saved favorites to verify
  }
});

function hideQuestionnaire() {
  questionnaireSection.classList.add("hidden"); // Hide the entire questionnaire
}
function populateFavorites() {
  hideQuestionnaire();
  // Get the saved favorites list container (the <ul> or <ol> element)
  const favoritesList = document.getElementById("favorites-list");

  // Clear any existing items in the list (optional)
  favoritesList.innerHTML = ""; // This will clear the list every time we populate it

  // Loop through each saved favorite and create a list item
  savedFavorite.forEach((favorite, index) => {
    const listItem = document.createElement("li");  // Create a new <li> element
    listItem.textContent = favorite;  // Set the text content of the list item
    favoritesList.appendChild(listItem);  // Append the list item to the favorites list
  });

  console.log("the fav button was pressed");
}

// fav button event listenter 
 favoriteButton.addEventListener('click', populateFavorites);




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



// // Save to local storage when "Save Changes" button is clicked in the modal
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