const firstImage = document.querySelector("#img1");
const registrationForm = document.querySelector("#form-container");
const registeredUser = document.querySelector("#registered-user");
const diceImage = document.querySelector("#img3");
const fourthImage = document.querySelector("#img4");


let user = {};

firstImage.addEventListener("click", function() {

  registrationForm.style.display = "block";

  
  registrationForm.addEventListener("submit", function(event) {
    event.preventDefault();

    // Get the values of the name, email, and username 
    const name = document.querySelector("#name").value;
    const email = document.querySelector("#email").value;
    const username = document.querySelector("#username").value;

    // Store the values in the user object
    user.name = name;
    user.email = email;
    user.username = username;

    // Hide the registration form
    registrationForm.style.display = "none";

   

  });
});
 // Add an event listener to the second image that listens for clicks
 document.querySelector("#img2").addEventListener("click", function() {
    // Show the registered user information
    registeredUser.style.display = "block";
    registeredUser.innerHTML = `Name: ${user.name}<br>Username: ${user.username}`;
  });








let sum = 0;
let count = 0;

diceImage.style.display = "none";
fourthImage.style.pointerEvents = "none";


document.querySelector("#img3").addEventListener("click", function() {

  diceImage.style.display = "block";


  diceImage.addEventListener("click", function() {

    count++;


    sum += Math.floor(Math.random() * 6) + 1;

    if (count === 3) {
      if (sum > 10) {
        fourthImage.style.pointerEvents = "auto";

      } else {
        alert("Try again after scoring more than 10.");
      }
    }
  });
});
