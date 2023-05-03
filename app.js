// Dog breed selector

const breedApiUrl = "https://api.thedogapi.com/v1/breeds";
const headers = {
  "x-api-key":
    "live_4atmgORNWxUZUQaK0V2KGt3AkyxjisK9TXDVhqSbRvoxWyezCu7blzvxtA97e4JE",
};

//Dog breed input field.
const breedInput = document.getElementById("dogBreed");
const breedSuggestions = document.getElementById("breedSuggestions");

//Execute function on keyup

breedInput.addEventListener("keyup", () => {
  const breedUserInput = breedInput.value;
});

async function getBreeds() {
  try {
    const response = await fetch(breedApiUrl, { headers });
    const data = await response.json();
    if (breedUserInput.length > 2) {
    }
    //funtion here
  } catch (error) {
    console.log(error);
  }
}
const breedFetch = fetch("https://api.thedogapi.com/v1/breeds");

//Dog weight user input

function dogWeight() {
  const dogWeightInput = document.getElementById("dogWeight");
  const data = dogWeightInput.value;
}

//const = dailyCalories = RER * life stage factor * activity factor
// const restEnergyRequirement = 70 * body weight ^ 0.75

const activityHover = document.querySelector("#activityLevel");

function activityExplanation() {
  activityHover.addEventListener("hover");
}

const submitButton = document.getElementById("submit");

const modal = document.querySelector(".modal");
submitButton.addEventListener("click", modal.classList.add(".modalActivated"));
