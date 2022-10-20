// example 1 - Map into HTML
// const steps = ["one", "two", "three"];

/* const stepsHtml = steps.map(function (step) {
  return `<li>${step}</li>`;
}); */

/* var getHtml = function (step){
  return `<li>${step}</li>`;
}

const stepsHtml = steps.map(getHtml);

document.getElementById("myList").innerHTML=stepsHtml.join("");
 */

// Example 2 - Map
 const grades = ["A", "B", "A"];

function getGPA (grade) {
  let gpa = 0

  if (grade == "A") {
    gpa = 4

  } else if (grade == "B") {
    gpa = 3

  } else if (grade == "C") {
    gpa = 2

  } else if (grade == "D") {
    gpa = 1
  }

  return gpa;
};

const gpaGrades = grades.map(getGPA);

// Example 3 - Reduce
const gpaSum = gpaGrades.reduce((total, item) => total + item);

gpa = gpaSum / gpaGrades.length

// Example 4 - Filter
const fruits = ['watermelon', 'peach', 'apple', 'tomato', 'grape'];

const sixCharacterFruits = fruits.filter(fruit => fruit.length > 6);

// Example 5 - indexOf
const numbers = [12, 34, 21, 54];
const luckyNumber = 21;

let luckyNumberIndex = numbers.indexOf(luckyNumber); // shows 2, which is the INDEX of the value in the array.

