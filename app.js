document.addEventListener("DOMContentLoaded", () => {
  // API

  const breedApiUrl = "https://api.thedogapi.com/v1/breeds/";
  const headers = {
    "x-api-key":
      "live_4atmgORNWxUZUQaK0V2KGt3AkyxjisK9TXDVhqSbRvoxWyezCu7blzvxtA97e4JE",
  };

  //Input fields
  const breedInput = document.getElementById("dogBreed");
  const dogWeightInput = document.getElementById("dogWeight");
  const lifestageInput = document.getElementById("stage");

  //Breed API access and autosuggest function

  async function getBreeds() {
    try {
      const response = await fetch(breedApiUrl, { headers });
      if (!response.ok) {
        throw new Error("Failed to fetch breed data");
      }
      const data = await response.json();

      let breedUserInput = breedInput.value.trim().toLowerCase();
      let suggestionList = document.querySelector(".list");
      suggestionList.innerHTML = "";
      if (breedUserInput.length > 0) {
        let matchingBreeds = data.filter((breed) =>
          breed.name.toLowerCase().startsWith(breedUserInput)
        );
        let breedNames = matchingBreeds.map((breed) => breed.name);
        breedNames.forEach((name) => {
          let listItem = document.createElement("li");
          listItem.classList.add("list-items");
          listItem.style.cursor = "pointer";
          listItem.textContent = name;
          console.log(name);

          listItem.addEventListener("click", () => {
            breedInput.value = name;
            suggestionList.innerHTML = "";
            breedResult.textContent = name;
            console.log(name);
          });
          suggestionList.appendChild(listItem);
        });

        suggestionList.style.maxHeight = "300px";
        suggestionList.style.overflowY = "auto";
      }
    } catch (error) {
      console.error("Failed to fetch breed data:", error);
    }
  }

  breedInput.addEventListener("keyup", getBreeds);

  //Determining lifestage factor

  getLifestageFactor = () => {
    let lifestage = lifestageInput.value;

    let lifestageFactor = "";

    if (lifestage === "Puppy") {
      lifestageFactor = 2.5;
    } else if (lifestage === "Pregnant") {
      lifestageFactor = 1.8;
    } else if (lifestage === "Senior") {
      lifestageFactor = 0.8;
    } else {
      lifestageFactor = 1.0;
    }
    return lifestageFactor;
  };

  //Determine activity level

  getActivityLevel = () => {
    let activitySelector = document.querySelector(
      'input[name="activity"]:checked'
    ).value;
    return activitySelector;
  };

  calculateActivityFactor = () => {
    let selectedActivityLevel = getActivityLevel();

    if (selectedActivityLevel === "light") {
      activityLevel = 1.2;
    } else if (selectedActivityLevel === "medium") {
      activityLevel = 1.4;
    } else if (selectedActivityLevel === "high") {
      activityLevel = 2.0;
    }
    return activityLevel;
  };

  //Calorie calculations

  calculateRER = (weight) => {
    return Math.round(70 * Math.pow(weight, 0.75));
  };

  calculateMinCalorieNeeds = (RER, lifestageFactor, activityLevel) => {
    return Math.round(RER * (lifestageFactor + activityLevel));
  };

  //Modal
  const submitButton = document.getElementById("submit");
  const closeButton = document.getElementById("closeButton");
  const modal = document.getElementById("modal");

  //Modal field population

  const breedResult = document.getElementById("resultBreed");
  const weightResult = document.getElementById("resultWeight");
  const activityResult = document.getElementById("activityResult");
  const minCalResult = document.getElementById("minCal");
  const dailyCalResult = document.getElementById("dailyCal");

  submitButton.addEventListener("click", () => {
    if (breedInput.value.trim() === "") {
      alert("Please select the dog's breed");
      return;
    }

    let weight = parseInt(dogWeightInput.value);

    if (isNaN(weight) || weight <= 0) {
      alert("Please enter a valid weight");
      return;
    }

    let RER = calculateRER(weight);
    let lifestageFactor = getLifestageFactor();
    let activityLevel = calculateActivityFactor();
    let dailyCalorieNeeds = calculateMinCalorieNeeds(
      RER,
      lifestageFactor,
      activityLevel
    );

    weightResult.textContent = dogWeightInput.value;
    activityResult.textContent = getActivityLevel();
    minCalResult.textContent = RER;
    dailyCalResult.textContent = dailyCalorieNeeds;

    modal.showModal();
  });

  closeButton.addEventListener("click", () => {
    modal.close();
  });
});

//KEYBOARD functionalities

// close the list if the user clicks outside input or escape btn

document.addEventListener("click", (e) => {
  const target = e.target;
  if (target !== breedInput && !target.closest(".list")) {
    closeList();
  }
});

document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") {
    closeList();
  }
});

function closeList() {
  const suggestionList = document.querySelector(".list");
  suggestionList.innerHTML = "";
}

//mobile functions

const questionmark = document.querySelector(".questionmark_container");
const activityExplanation = document.querySelector(".activity_explanation");
questionmark.addEventListener("click", () => {
  activityExplanation.style.display =
    activityExplanation.style.display === "none" ? "block" : "none";
});
