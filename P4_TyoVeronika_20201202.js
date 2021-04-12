// created a mover class

//  added accelleration and limited it

// random acelleration

// interactivity. The walker accellerate toward the mouse.

//  create an array of random walkers
let col=['#EE82EE','#DDA0DD','#EE82EE','#E6E6FA'];
function Mover() {
  this.location = createVector(random(width), random(height));
  this.velocity = createVector(random(-2, 1), random(-2, 1));
  this.acceleration = createVector(-0.001,0.01); // a constant accelleration, for now
  this.topspeed = 10; 


  this.update = function() {
    // Moved towards the mouse
    let mouse = createVector(mouseX,mouseY);
    let dir = p5.Vector.sub(mouse, this.location);
    dir.normalize();
    dir.mult(0.5);
    this.acceleration = dir;
    //Random acelleration
    //changing the speed and also the direction

    this.velocity.add(this.acceleration);
    this.velocity.limit(this.topspeed);
    this.location.add(this.velocity);
  
};
 

  this.display = function() {
    stroke(255);
    fill(random(col));
    ellipse(this.location.x,this.location.y,random(10,15),random(1,10)); 
    
 
  };

  this.checkEdges = function() {
    if (this.location.x > width) {
      this.location.x = 0;
    } else if (this.location.x < 0) {
      this.location.x = width;
    }

    if (this.location.y > height) {
      this.location.y = 0;
    } else if (this.location.y < 0) {
      this.location.y = height;
    }
  };
}

let mover;
let movers = [];
function preload() {
  //specify the path for the background image
  img = loadImage('img2.jpg');

}


function setup() {
  createCanvas(windowWidth,windowHeight);
  mover = new Mover();
  

  for (let i = 0; i < 700; i++) {
    movers[i] = new Mover();
  }
}


function draw() {
  background(img,0,0);
 
  mover.update();
  // removed check edges
  mover.checkEdges();



  for (let i = 0; i < movers.length; i++) {
    movers[i].update();
    movers[i].display();
  }

}
