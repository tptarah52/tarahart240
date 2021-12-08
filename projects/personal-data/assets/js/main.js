
// function expandBlob() {
//   var blob = document.getElementById("yellowblob");
//         var currWidth = blob.clientWidth;
//         var currHeight = blob.clientHeight;
//         if(currWidth == 442){
//         } else{
//             blob.style.width = (currWidth + 50) + "px";
//             blob.style.height = (currHeight + 50) + "px";
//         } 
// }

let button = document.querySelector("#five");
let blob = document.querySelector("#yellowblob");

function expandBlob() {
  blob.classList.toggle("large");
}

blob.addEventListener("click", expandBlob);

//look at foreach function from week10b wednesday

// let button = document.querySelector("#four");
// let blob = document.querySelector("lightblueblob");
// blob.addEventListener("click", expandBlob);



// let button = document.querySelector("#three");
// let blob = document.querySelector("blueblob");
// blob.addEventListener("click", expandBlob);

// let button = document.querySelector("#two");
// let blob = document.querySelector("pinkblob");
// blob.addEventListener("click", expandBlob);

// let button = document.querySelector("#one");
// let blob = document.querySelector("greenblob");
// blob.addEventListener("click", expandBlob);



// let myArray = ["apple", "orange", "banana", "peach"];

// // to get elements in an array we access them by their `index`
// let firstItem = myArray[0]; // 'apple'
// // Counting starts at 0 in JavaScript.
// let lastItem = myArray[3];  // 'peach'

// // You can identify how many items are in an array using dot notation and the length parameter.
// let clothingList = ["blue shirt", "red jeans", "purple dress", "teal shorts"];
// console.log("There are", clothingList.length, "items of clothing");
// // log first article of clothing
// console.log("The first article of clothing is", clothingList[0]);

// // to get the last item in an array, 
// console.log(clothingList[clothingList.length - 1]);

// // why clothingList.length -1?
// // Since arrays start at 0 you need to adjust the length to match the index.
// // There are 4 items in our array:
// let clothingList = ["blue shirt", "red jeans", "purple dress", "teal shorts"];


// let buttonArray = ["#five",  "#four". "#three", "#two",  "#one"];
// let blobArray= ["#yellowblob", "lightblueblob", "blueblob", "pinkblob", "greenblob"];

// let buttonIndex = buttonArray[0];
// let blobIndex = blobArray[0];





    
