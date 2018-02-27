//example from Daniel Shiffman

var spaceData; //global variable so we can get the callback in the draw loop
var x = 0;
function setup() {
  createCanvas(400,400);
  //loading JSON from a URL path. gotData is the callback, jsonp is for security  reasons
  loadJSON("http://api.open-notify.org/astros.json", gotData, 'jsonp');
}


//function for calling and loading the data 
function gotData(data){
  print(data);
  //spaceData is a variable to hold our data so we can use it in draw
  spaceData = data;
}

function draw() {
  background(0);
  animate();
  if (spaceData) { //if the callback has loaded
  randomSeed(3);//stores the first random values
  //draw an ellipse for each person in space
    for(var i = 0; i < spaceData.number; i++){
      fill(255);
      ellipse(random(width), random(height), 16, 16);
    }
  }
}

function animate(){
// this line is to show  you how you can have other things
//happening while the data is displayed staticly 
  stroke(255);
  line(x,0, x, height);
  x = x + 1;
  if (x > width){
    x = 0; 
  }
}