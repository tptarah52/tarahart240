
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



    