# Dog Nutrition Calculator

The Dog Nutrition Calculator is my first web development project aimed at improving my HTML, CSS, and JavaScript skills. It is a web application that allows users to calculate the calorie needs of their dogs based on breed, weight, lifestage, and activity level. The main purpose of this project is to gain hands-on experience and enhance my proficiency in web development technologies.

## Features

- Breed Autosuggest: Utilizes the Dog API to provide an autosuggest feature for breed input, making it easier for users to select the correct breed.
- Customization: Users can select the lifestage and activity level of their dog, allowing for accurate calorie calculations based on specific needs.
- Accurate Calorie Calculation: The app calculates the Resting Energy Requirement (RER) using the formula RER = 70 * weight^0.75, and determines daily calorie needs by multiplying the RER with lifestage and activity level factors.
- Modal Dialog: Displays the results in a modal dialog, providing a clear overview of breed, weight, activity level, RER, and daily calorie needs for the dog.

## Technologies Used

- HTML, CSS, JavaScript: Core web technologies used to create the user interface, layout, and interactivity of the app.
- Fetch API: Used to fetch breed information from the Dog API, enabling the autosuggest feature.
- Media Queries: Implemented to ensure a responsive design that adapts to different screen sizes.
- Dialog Element: Utilized to create the modal dialog for displaying the results in a user-friendly manner.



## Learnings

Throughout the development of this project, I have acquired several valuable learnings:

- **Using an API**: I gained experience in working with APIs by making requests to the Dog API to retrieve dog breed information. This involved handling API responses, parsing JSON data, and incorporating the retrieved information into the application.
- **Autocomplete/Autosuggest:** Implementing the autosuggest feature for the breed input field allowed me to enhance the user experience by providing a list of breed suggestions based on user input. This involved dynamically updating the suggestions based on the retrieved data from the Dog API and handling user interactions to select a breed.
- **Event Handling:** I leveraged event listeners to handle various user interactions within the application. This included handling key events for keyboard navigation, enabling the opening and closing of the suggestion list and activity explanation popup. These event handling techniques improved the overall usability and interactivity of the application.
- **Responsive Design:** Applying responsive design principles using media queries enabled the application to adapt and provide an optimal user experience across different screen sizes and devices. By adjusting the layout, styles, and behaviour based on the device's viewport, I ensured that the application was visually appealing and functional on both desktop and mobile devices.
- **Modal Dialog:** Creating a modal dialog to display the results of the dog nutrition calculation was a valuable learning experience. This involved designing the modal structure, incorporating dynamic data into the modal, and implementing interactive features such as close buttons. The modal dialog enhanced the presentation of information, making it more visually appealing and accessible to users.

## Error Handling

While error handling is an essential aspect of web development, this project is still a work in progress in terms of implementing specific error handling mechanisms. As I continue to enhance my skills, I plan to implement error handling for scenarios such as failed API requests, invalid user inputs, or any unexpected errors.

## Resources

- Dog API: https://dog.ceo/dog-api/
- National Research Council (NRC): https://nrc88.nas.edu/nrh/
- American College of Veterinary Nutrition (ACVN): https://acvn.org/
- World Small Animal Veterinary Association (WSAVA): https://wsava.org/

## Acknowledgments

- The Dog API for providing the breed data used in the app.
- Resources and documentation from the National Research Council (NRC), American College of Veterinary Nutrition (ACVN), and World Small Animal Veterinary Association (WSAVA) for guidance on dog nutrition and feeding.
