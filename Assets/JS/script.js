//TODO create variables with a selection query that selects elements from the HTML doc
const helpMePickButton = document.getElementById("helpMePick"); //Used for the Guide My Coffee Journey! button. 
const questionnaireSection = document.getElementById("questionnaire");
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




// This is for the modal to pop up
const myModal = document.getElementById('myModal')
const myInput = document.getElementById('myInput')

myModal.addEventListener('shown.bs.modal', () => {
  myInput.focus()
})