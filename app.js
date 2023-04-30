// Dog breed selector

const breedApiUrl = "https://api.thedogapi.com/v1/breeds";
const apiKey =
  "live_4atmgORNWxUZUQaK0V2KGt3AkyxjisK9TXDVhqSbRvoxWyezCu7blzvxtA97e4JE";

const breedSelect = document.getElementById("dogBreed");

function dogWeight() {
  const userWeightInput = document.getElementById("dogWeight");
  const data = userWeightInput.value;
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
