var ctx=document.getElementById("board").getContext("2d");
ctx.strokeStyle="black";
ctx.fillStyle="green";
// var RADIUS=10;
var START_ANGLE=0;
var END_ANGLE=2*Math.PI;
var cx,cy;
for(var i=0;i<4556;i++){
    var RADIUS = getRandomRadius();
    cx=Math.random()*1000;
    cy=Math.random()*1000;
    ctx.beginPath();
    ctx.arc(cx,cy,RADIUS,START_ANGLE,END_ANGLE,false);
    ctx.fillStyle = getRandomColor();
    ctx.fill();
    ctx.stroke();
    ctx.closePath();
}

function getRandomNumberBetween(min,max){
    return Math.floor(Math.random()*(max-min+1)+min);
}

function getRandomColor() {
  let h = getRandomNumberBetween(200, 240);
  let s = getRandomNumberBetween(60, 100);
  let l = getRandomNumberBetween(30, 100);
  let randColor = 'hsl(' + h + ', ' + s + '%, ' + l + '%)';
  return randColor;
}

function getRandomRadius () {
    var radius = Math.floor(Math.random()*15);
    return radius;
}