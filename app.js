document.addEventListener("DomContentLoaded", () => {
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

  //Execute autosuggest on keyup

  breedInput.addEventListener("keyup", getBreeds);

  //Breed API access and autosuggest function

  async function getBreeds() {
    try {
      const response = await fetch(breedApiUrl, { headers });
      if (!response.ok) {
        throw new Error("Failed to fetch breed data");
      }
      const data = await response.json();

      breedInput.addEventListener("keyup", (e) => {
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

            listItem.addEventListener("click", () => {
              breedInput.value = name;
              suggestionList.innerHTML = "";
              breedResult.textContent = name;
              console.log(name);
            });
            suggestionList.appendChild(listItem);
          });
        }
      });
    } catch (error) {
      console.log("error");
    }
  }

  //Determining lifestage factor

  getLifestageFactor = () => {
    let lifestage = lifestageInput.value;

    let lifestageFactor = "";

    if (lifestage === "Puppy") {
      lifestageFactor = 2.5;
    } else if (lifestage === "Pregnant") {
      lifestageFactor = 4.5;
    } else if (lifestage === "Senior") {
      lifestageFactor = 1.1;
    } else {
      lifestageFactor = 1.5;
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
      activityLevel = 1.6;
    }
    return activityLevel;
  };

  //Calorie calculations

  calculateRER = (weight) => {
    return Math.round(70 * Math.pow(weight, 0.75));
  };

  calculateMinCalorieNeeds = (RER, lifestageFactor, activityLevel) => {
    return Math.round(RER * lifestageFactor * activityLevel);
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
    let weight = parseInt(dogWeightInput.value);
    let RER = calculateRER(weight);
    let lifestageFactor = getLifestageFactor();
    console.log(lifestageFactor);
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
