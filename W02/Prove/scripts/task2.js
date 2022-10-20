/* Lesson 2 */

/* VARIABLES */

// Step 1: declare and instantiate a variable to hold your name
var name = "Bryan Nuñez"

// Step 2: place the value of the name variable into the HTML file (hint: document.querySelector())
document.querySelector("#name").textContent = name;

// Step 3: declare and instantiate a variable to hold the current year
var currentyear = 2022

// Step 4: place the value of the current year variable into the HTML file
document.querySelector("#year").innerHTML = currentyear;

// Step 5: declare and instantiate a variable to hold the name of your picture
var picture = "images/Charro.jpeg"

// Step 6: copy your image into the "images" folder

// Step 7: place the value of the picture variable into the HTML file (hint: document.querySelector().setAttribute())
document.querySelector("#picture").setAttribute("src", picture);



/* ARRAYS */

// Step 1: declare and instantiate an array variable to hold your favorite foods
var favFoods = ["Pozole", "Discada", "Tacos", "Enchiladas"];

// Step 2: place the values of the favorite foods variable into the HTML file
document.querySelector("#food").textContent = favFoods;

// Step 3: declare and instantiate a variable to hold another favorite food
var otherfavFood = "Carne en su Jugo";

// Step 4: add the variable holding another favorite food to the favorite food array
favFoods.push(otherfavFood);

// Step 5: repeat Step 2
document.querySelector("#food").textContent = favFoods;

// Step 6: remove the first element in the favorite foods array
favFoods.splice(0,1);

// Step 7: repeat Step 2
document.querySelector("#food").textContent = favFoods;

// Step 8: remove the last element in the favorite foods array
favFoods.pop();

// Step 7: repeat Step 2
document.querySelector("#food").textContent = favFoods;


