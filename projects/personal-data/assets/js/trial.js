var ctx = document.getElementById('c');

function polygon(sides, size, Xcenter, Ycenter, offset) {
  ctx.beginPath();
  ctx.moveTo(Xcenter + size * Math.cos(offset), Ycenter + size * Math.sin(offset));
  for (var i = 1; i <= sides; i += 1) {
    x = Xcenter + size * Math.cos(i * 2 * Math.PI / sides +offset)
    y = Ycenter + size * Math.sin(i * 2 * Math.PI / sides +offset)
    ctx.lineTo(x, y);
  }
  ctx.stroke();
}

arr = [3, 4, 5, 6, 7];
arr.sort(() => Math.random() - 0.5);
for (var i = 1; i <= 5; i += 1) {
  offset = Math.random() * 5
  polygon(arr[i-1], 40, 85*i, 60, offset)
}

// function setup() {
//   var circles = [],
//       circle = {},
//       overlapping = false,
//       NumCircles = 1000,
//       protection = 10000,
//       counter = 0,
//       canvasWidth = window.innerWidth,
//       canvasHeight = window.innerHeight;

//   createCanvas(canvasWidth, canvasHeight);

//   // populate circles array
//   // brute force method continues until # of circles target is reached
//   // or until the protection value is reached
//   while (circles.length < NumCircles &&
//          counter < protection) {
//     circle = {
//       x: random(width),
//       y: random(height),
//       r: random(3, 36)
//     };
//     overlapping = false;
    
//     // check that it is not overlapping with any existing circle
//     // another brute force approach
//     for (var i = 0; i < circles.length; i++) {
//       var existing = circles[i];
//       var d = dist(circle.x, circle.y, existing.x, existing.y)
//       if (d < circle.r + existing.r) {
//         // They are overlapping
//         overlapping = true;
//         // do not add to array
//         break;
//       }
//     }
    
//     // add valid circles to array
//     if (!overlapping) {
//       circles.push(circle);      
//     }
    
//     counter++;
//   }
  
//   // circles array is complete
//   // draw canvas once
//   background("#233")
//   fill("#2AC1A6");
//   noStroke();
//   for (var i = 0; i < circles.length; i++) {
//     ellipse(circles[i].x, circles[i].y, 
//             circles[i].r*2, circles[i].r*2);
//   }
// }
// var filledArray = [];
// circles = {};

// firstTime.length = 4227;

// var blob = document.getElementsByTagName('blob');

// // get window width and height
// var winWidth = window.innerWidth;
// var winHeight = window.innerHeight;

// // function that returns a random number between a min and max
// function getRandomNumber(min, max) {
    
//   return Math.random() * (max - min) + min;
    
// }


// for ( var i=0; i < firstTime.length; i++ ) {
 	
//     // shortcut! the current div in the list
//     var thisBlob = firstTime[i];
    
//     // get random numbers for each element
//     randomTop = getRandomNumber(0, winHeight);
//     randomLeft = getRandomNumber(0, winWidth);
    
//     // update top and left position
//     thisBlob.style.top = randomTop +"px";
//     thisBlob.style.left = randomLeft +"px";
    
// }






// // get window width and height
// var winWidth = window.innerWidth;
// var winHeight = window.innerHeight;


// for ( var i=0; i < filledArray.length; i++ ) {
 	
//     // shortcut! the current div in the list
//     var thisBlob = filledArray[i];
    
//     // get random numbers for each element
//     randomTop = getRandomNumber(0, winHeight);
//     randomLeft = getRandomNumber(0, winWidth);
    
//     // update top and left position
//     thisBlob.style.top = randomTop +"px";
//     thisBlob.style.left = randomLeft +"px";
    
// }

// function that returns a random number between a min and max
// function getRandomNumber(min, max) {
    
//   return Math.random() * (max - min) + min;
    
// }


// var winWidth = window.innerWidth;
// var winHeight = window.innerHeight;
// var x; 
// var y;


// 	for(var i = 0; i < 4227; i++) {
// 		x = getRandomNumber(0, winWidth);
// 		y = getRandomNumber(0, winHeight);
// 	}
	



