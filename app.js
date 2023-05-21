// Dog breed selector

const breedApiUrl = "https://api.thedogapi.com/v1/breeds/";
const headers = {
  "x-api-key":
    "live_4atmgORNWxUZUQaK0V2KGt3AkyxjisK9TXDVhqSbRvoxWyezCu7blzvxtA97e4JE",
};

//Dog breed input field.
const breedInput = document.getElementById("dogBreed");
const breedSuggestions = document.getElementById("breedSuggestions");

//Execute function on keyup

breedInput.addEventListener("keyup", getBreeds);

//Breed API access and autosuggest function

async function getBreeds() {
  try {
    const response = await fetch(breedApiUrl, { headers });
    const data = await response.json();

    breedInput.addEventListener("keyup", (e) => {
      let breedUserInput = breedInput.value.trim().toLowerCase();
      let suggestionList = document.querySelector(".list");
      suggestionList.innerHTML = "";
      if (breedUserInput.length > 1) {
        let matchingBreeds = data.filter((breed) =>
          breed.name.toLowerCase().startsWith(breedUserInput)
        );
        let breedNames = matchingBreeds.map((breed) => breed.name);
        breedNames.forEach((name) => {
          let listItem = document.createElement("li");
          listItem.classList.add("list-items");
          listItem.style.cursor = "pointer";
          listItem.textContent = name;

          listItem.addEventListener("click", () => {
            breedInput.value = name;
            suggestionList.innerHTML = "";
          });
          suggestionList.appendChild(listItem);
        });
      }
    });
  } catch (error) {
    console.log("error");
  }
}

//Dog weight user input

const dogWeightInput = document.getElementById("dogWeight");
const weight = dogWeightInput.value;

//const = dailyCalories = RER * life stage factor * activity factor
// const restEnergyRequirement = 70 * body weight ^ 0.75

const activitySelector = document.querySelector("#activityLevel");

//Submit modal activation
const submitButton = document.getElementById("submit");




//Calculation of the final value

//Resting energy requirement
let RER = 30 * weight + 70

// Total Daily Energy Expenditure 
let TDEE = 


