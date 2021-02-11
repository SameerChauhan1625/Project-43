var h,m,s;
var hangle,mangle,sangle;
function setup() {
  createCanvas(1600,800);
   //set angle in Degrees
   angleMode(DEGREES);   
}

function draw() {
  background(0);  
   
  h = hour();
  m = minute();
  s = second();

  sangle = map(s,0,60,0,360);
  mangle = map(m,0,60,0,360);
 
  hangle = map(h%12,0,11,0,360);
 
  translate(800,400);
  push();
  rotate(sangle-90);
  stroke("blue");
  strokeWeight(7);
  line(0,0,200,0);
  pop();

  push();
  rotate(mangle - 90);
  stroke("yellow");
  strokeWeight(7);
  line(0,0,150,0);
  pop();
  
  push();
  rotate(hangle - 90);
  stroke("red");
  strokeWeight(9);
  line(0,0,100,0);
  pop();

  rotate(-90);
  stroke("blue");
  strokeWeight(7);
  noFill();
  arc(0,0,500,500,0,sangle);

  stroke("yellow");
  strokeWeight(7);
  noFill();
  arc(0,0,530,530,0,mangle);

  stroke("red");
  strokeWeight(9);
  noFill();
  arc(0,0,570,570,0,hangle);
}