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

function getRandomColor() {
    var letters = '0123456789ABCDEF'.split('');
    var color = '#';
    for (var i = 0; i < 6; i++ ) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

function getRandomRadius () {
    var radius = Math.floor(Math.random()*25);
    return radius;
}