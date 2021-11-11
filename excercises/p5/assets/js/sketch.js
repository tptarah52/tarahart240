

let bgcolor;
//create variable for input
let input;
let button;


function happyFace (x, y, diam) {
      // Face
      fill(255, 255, 0);
      stroke(0);
      strokeWeight(2);
      ellipse(x, y, diam, diam);
      
      // Smile
      var startAng = .1*PI
      var endAng = .9*PI
      var smileDiam = .6*diam;
      arc(x, y, smileDiam, smileDiam, startAng, endAng);
      
      // Eyes
      var offset = .2*diam;
      var eyeDiam = .1*diam;
      fill(0);
      ellipse(x-offset, y-offset, eyeDiam, eyeDiam);
      ellipse(x+offset, y-offset, eyeDiam, eyeDiam);
}

function startOver() {
  map.clear();
}

function sadFace (x, y, diam) {
    // Face
    fill(0, 75, 144);
    stroke(0);
    strokeWeight(4);
    ellipse(x, y, diam, diam);
      
    //EYES
    arc(x -40, y -35, 50, 50, QUARTER_PI, PI-QUARTER_PI);
    arc(x +40, y-35, 50, 50, QUARTER_PI, PI-QUARTER_PI);
    //Smile
    arc(x-15, y+60, 90, 85,PI+2*QUARTER_PI, 2*PI);
      
}

function setup() {
  let canvas = createCanvas(windowWidth, windowHeight);
  frameRate(15);
  canvas.position(0, 0);
  canvas.class("container");

  //create a random fill
  bgcolor = {r: 0, g: 255, b:255};
  bgcolor.r = random(0, 255);
  bgcolor.g = random(0, 255);
  bgcolor.b = random(0,255);

  button = createButton("happy");
  button.class("button");
  button.mousePressed(function() {
    // happyFace();
      for (let i = 0; i < 320; i++) {
          push();
          fill(random(255), bgcolor.g, bgcolor.b);
          translate(random(width), random(height));
          rotate(random(5 * HALF_PI));
          happyFace(width/2, height/2, 170);
          pop();
        }

  });

  button = createButton("Meh");
  button.class("button");
  button.mousePressed(function() {
    // happyFace();
      for (let i = 0; i < 320; i++) {
          push();
          fill(random(255), bgcolor.g, bgcolor.b);
          translate(random(width), random(height));
          rotate(random(5 * HALF_PI));
          sadFace(width/2, height/2, 170);
          pop();
        }

  });

   button = createButton("Clear");
  button.class("endbutton");
  button.mousePressed(function() {
      startOver();

  });


}


  //create a div for our value
  // birthday = createDiv("Your birthday");
  // birthday.class("birthday");



function draw() {
    // background(bgcolor.r,bgcolor.g,bgcolor.b);
    // //target the HTML value of our variable birthday, and set the contents to be the value of our variable input
    // // birthday.html(input.value());

    // // for (let i = 0; i < 320; i++) {
    // //     push();
    // //     fill(random(255), bgcolor.g, bgcolor.b);
    // //     translate(random(width), random(height));
    // //     rotate(random(5 * HALF_PI));
    // //     happyFace(width/2, height/2, 170);
    // //     pop();
    // //   }

}
