var temp; //global variable so we can get the callback in the draw loop

function setup() {
  createCanvas(600, 600);
  //loading JSON from a URL path. gotData is the callback, jsonp is for security  reasons
  loadJSON("https://ofmpub.epa.gov/rsig/rsigserver?SERVICE=NWIS&REQUEST=download&SITEID=01589485&PARAMS=00300&FORMAT=json&PERIOD=P1D", gotData);
}

//function for calling and loading the data 
function gotData(data) {
  print(data);
  //hold our data so we can use it in draw
  temp = data;

  background(0);
  var dissolvedO = temp.value.timeSeries[0].values[0].value;
  if (temp) {
    for (i = 0; i < dissolvedO.length; i++) {
      //map each value
      var mapDO = map(dissolvedO[i].value, 11, 12.5, 250, 550);
      noFill();
      stroke(255);
      strokeWeight(random(.1, 1));
      ellipse(mapDO, mapDO, random(1, 200), random(1, 200));
      //   var bg = map(temp.value.timeSeries[2].values[0].value[0], 0, 100, 255, 0);
      //   background(0,0, bg);
    }
  }
}

function draw() {

}