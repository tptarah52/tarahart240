
    let body = document.body;
    let headline = document.querySelector("h1");
    let headlines = document.querySelectorAll("h1");
    
    console.log(headline);
    console.log(headlines);
    
    // uses forEach to loop through all of the headlines
    headlines.forEach(function(headline) {
      // add an event listener to each individual headline
      headline.addEventListener('click', function (event) {
        // toggle the red class on this headline
        headline.classList.toggle("red");
      });
    });



let myArray = ["apple", "orange", "banana", "peach"];

// to get elements in an array we access them by their `index`
let firstItem = myArray[0]; // 'apple'
// Counting starts at 0 in JavaScript.
let lastItem = myArray[3];  // 'peach'

// You can identify how many items are in an array using dot notation and the length parameter.
let clothingList = ["blue shirt", "red jeans", "purple dress", "teal shorts"];
console.log("There are", clothingList.length, "items of clothing");
// log first article of clothing
console.log("The first article of clothing is", clothingList[0]);

// to get the last item in an array, 
console.log(clothingList[clothingList.length - 1]);

// why clothingList.length -1?
// Since arrays start at 0 you need to adjust the length to match the index.
// There are 4 items in our array:
let clothingList = ["blue shirt", "red jeans", "purple dress", "teal shorts"];


let dogBreeds = ["Pomeranian", "Husky", "Poodle", "Springer Spaniel", "Pug"];
// lets add another dog breed
dogBreeds.push("Bichon Frise");
console.log(dogBreeds);
