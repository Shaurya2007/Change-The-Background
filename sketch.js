var r = 255;
var g =100;
var b=50;

var y = 255;
var c =100;
var o=50;

function setup() {
  createCanvas(750, 400);

}

function draw() {
  background(r,g,b)
  r=map(mouseX,0,1000,0,255);
  b=map(mouseX,0,1000,0,100);
  g=map(mouseX,0,1000,0,50);
  
  ellipse(mouseX,200,50,50);
  fill (255,50,25);
}