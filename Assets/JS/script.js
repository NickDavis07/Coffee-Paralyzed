//TODO create variables with a selection query that selects elements from the HTML doc
const helpMePickButton = document.getElementById("helpMePick"); //Used for the Guide My Coffee Journey! button. 
const questionnaireSection = document.getElementById("questionnaire");
const randomButton = document.querySelector("#pickForMe"); // select the pick for me element in HTML 
const coffeeTypeSelect = document.getElementById("coffeeType").querySelector("select");
const tempOptionsSelect = document.getElementById("tempOptions").querySelector("select");
const milkOptionsSelect = document.getElementById("milkOptions").querySelector("select");
const flavorOptionsSelect = document.getElementById("flavorOptions").querySelector("select");
const favoritesSection = document.getElementById("favoritesSection")
const favoriteButton = document.querySelector("#favButton");
const favoritesList = document.getElementById("favorites-list");


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

    // Create card container
    const card = document.createElement("div");
    card.className = "card mb-3 border border-secondary";

    // Add a star icon at the top of the card
    const star = document.createElement("i");
    star.className = "bi bi-star-fill text-warning p-2"; // Bootstrap star icon with gold color
    card.appendChild(star);

    // Create card body
    const cardBody = document.createElement("div");
    cardBody.className = "card-body";

    // Add text content
    const cardText = document.createElement("p");
    cardText.className = "card-text";
    cardText.textContent = favorite;

    // Append to card body and card container
    cardBody.appendChild(cardText);
    card.appendChild(cardBody);

    // Append card to container
    favoritesList.appendChild(card);
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
    favoritesSection.classList.add("hidden");
  } else {
    questionnaireSection.classList.add("hidden");
  }

  //This allows the generated favorites list to be hidden when clicking the Customize Button.
  if (favoritesList) {
    favoritesList.innerHTML = ""; // Clears all dynamically generated cards
  }

  renderDropdownOptions();
}

function toggleFavorites() {
  const favoritesList = document.getElementById("favorites-list"); // Parent container of the cards

  if (favoritesSection.classList.contains("hidden")) {
    favoritesSection.classList.remove("hidden"); // Show the Favorites Section
    questionnaireSection.classList.add("hidden"); // Hide the Questionnaire Section

    // Ensure cards are re-rendered dynamically if needed
    populateFavorites();
  } else {
    favoritesSection.classList.add("hidden"); // Hide the Favorites Section

    // Clear dynamically generated cards
    if (favoritesList) {
      favoritesList.innerHTML = ""; // Removes all dynamically created cards
    }
  }
}

// EvenListener that displays the Questionnaire when clicking Customize
helpMePickButton.addEventListener("click", toggleQuestionnaire);

// EvenListener that displays the Favorites list when clicking Favorites
favoriteButton.addEventListener("click", toggleFavorites);
