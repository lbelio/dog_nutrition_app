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

// get matching breed names
// async function getBreeds() {
//   try {
//     const response = await fetch(breedApiUrl, { headers });
//     const data = await response.json();
//     let breedUserInput = breedInput.value;
//     if (breedUserInput.length > 1) {
//       //filter matching breeds using user input
//       let matchingBreeds = data.filter((breed) =>
//         breed.name.toLowerCase().startsWith(breedUserInput.toLowerCase())
//       );

//       // extract breed names from the data array and clear previous suggestions before appending new ones
//       let breedNames = matchingBreeds.map((breed) => breed.name);
//       breedSuggestions.innerHTML = "";
//     }
//   } catch (error) {
//     console.log(error);
//   }
// }

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
        // console.log(breedNames);
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
         // console.log(listItem);
        });
      }
    });
  } catch (error) {
    console.log("error");
  }
}

function displayNames(value) {
  breedUserInput;
}

getBreeds();

//Dog weight user input

function dogWeight() {
  const dogWeightInput = document.getElementById("dogWeight");
  const data = dogWeightInput.value;
}

//const = dailyCalories = RER * life stage factor * activity factor
// const restEnergyRequirement = 70 * body weight ^ 0.75

const activitySelector = document.querySelector("#activityLevel");

//Submit modal activation
const submitButton = document.getElementById("submit");
const modal = document.querySelector(".modal");
submitButton.addEventListener("click", () => {
  modal.classList.add(".modalActivated");
  console.log("added");
});
