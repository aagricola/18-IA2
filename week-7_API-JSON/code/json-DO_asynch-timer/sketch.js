var temp; //global variable so we can get the callback in the draw loop
var x =0; //for animate

function setup() {
  createCanvas(600, 600);
// setInterval is a JavaScript function that repeats a specified time interval
  setInterval(askDO, 1000); //now loadJSON is in
}

//function for calling and loading the data 
function gotData(data) {
  //print(data);
  //hold our data so we can use it in draw
  temp = data;
}

function draw() {
  var from = color(255, 120, 0); //color to lerp from
  var to = color(0, 102, 153) //color to lerp to
  interp = lerpColor(from, to, .6); //interpolated color

  background(0);
  animate();

  if (temp) {
    randomSeed(1); // this will store the the first random values
    var dissolvedO = temp.value.timeSeries[0].values[0].value;

    for (i = 0; i < dissolvedO.length; i++) {
      //map each value
      var mapDO = map(dissolvedO[i].value, 11, 12.5, 250, 550);
      noFill();
      strokeWeight(random(.1, 1));
      //ellipse(mapDO, mapDO, random(1, 200), random(1, 200));

      //change color and location of ellipses with conditional logic
      print(mapDO);
      if (mapDO < 311) {
        stroke(from);
        ellipse(mapDO, mapDO, random(1, 200), random(1, 200));
      } else if (mapDO > 311 && mapDO < 331) {
        stroke(interp);
        ellipse(mapDO, mapDO, random(1, 200), random(1, 200));
      } else if (mapDO >= 350) {
        stroke(to);
        ellipse(mapDO, mapDO, random(1, 200), random(1, 200));
      }
      
    }
  }
}

function animate(){
// this is to show  you how you can have other things
//happening while the data is displayed staticly 
  stroke(255);
  line(x,0, x, height);
  x = x + 1;
  if (x > width){
    x = 0; 
  }
}

function askDO(){
  //loading JSON from a URL path. gotData is the callback, jsonp is for security  reasons
  loadJSON("https://ofmpub.epa.gov/rsig/rsigserver?SERVICE=NWIS&REQUEST=download&SITEID=01589485&PARAMS=00300&FORMAT=json&PERIOD=P1D", gotData);
}

// function time(){
//   //let counter = 0;
//   noCanvas();//limit animation
  
//   var timer = select('#timer');
//   timer.html('0'); //insert text
  
//   function timeIt(){
//     counter ++;
//     timer.html(counter);
//   }
  
//   setInterval(timeIt, 1000);//native function 1000ms =1 s
//   //request animationframe is also another func
// }
