

let button = document.querySelector(".button");
let body = document.querySelector("body");


function getRandomNumberBetween(min,max){
    return Math.floor(Math.random()*(max-min+1)+min);
}


function newColor() {
  /*
  let h = (min, max) => Math.floor(Math.random() * (max - min)) + min;
  */
  let h = getRandomNumberBetween(182, 240);
  let s = getRandomNumberBetween(20, 100);
  let l = getRandomNumberBetween(20, 100);
  let randColor = color = 'hsl(' + h + ', ' + s + '%, ' + l + '%)';
  body.style.backgroundColor = randColor;
}


button.addEventListener("click", newColor);

