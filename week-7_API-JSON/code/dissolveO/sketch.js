//variables for the JSON data sets
var doData;

function preload(){
  //preload all the dataset
  doData = loadJSON("dissolvedO.json");
}

function setup() {
  createCanvas(600,600);
  background(0);
 //print the values of the Dissolved Oxygen
 
  //print(doData.value.timeSeries[0].values[0].value);
  //noCanvas();//use when using html elements
  
 noStroke();
 fill(255);
  var dissolvedO = doData.value.timeSeries[0].values[0].value;
  for(var i = 0; i < dissolvedO.length; i++){
    //createElement('h1', dissolvedO[i].value); //doData.value.timeSeries[0].values[0].value[i].value
    var mapDO = map(dissolvedO[i].value, 11, 12.5, 0, 255);
    print(dissolvedO[i].value);
    var x = (dissolvedO.length/width)
    ellipse(i*25, mapDO, 20, 20);
    //print(mapDO);
  }
}

function draw() {
}