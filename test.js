
// const apiUrl = "https://api.thedogapi.com/v1/breeds";
// const apiKey = "live_4atmgORNWxUZUQaK0V2KGt3AkyxjisK9TXDVhqSbRvoxWyezCu7blzvxtA97e4JE";
// const inputField = document.getElementById('dogBreed');
// const breedList = document.getElementById('breedList');



// inputField.addEventListener('keyup', async (event) => {
//     const input = event.target.value.toLowerCase();
    
//     if (input.length > 2) { // Only suggest breeds if at least 3 characters have been entered
//       const response = await fetch(`${apiUrl}/search?q=${input}`), {
//         headers: {
//         'x-api-key': apiKey}
//       }
//       const data = await response.json();
//       }
      
//       breedList.innerHTML = ''; // Clear any existing suggestions
      
//       data.forEach((breed) => {
//         const breedName = breed.name;
//         const listItem = document.createElement('li');
//         listItem.innerText = breedName;
//         breedList.appendChild(listItem);
//       });
//     } else {
//       breedList.innerHTML = ''; // Clear any existing suggestions
//     }
//   });

