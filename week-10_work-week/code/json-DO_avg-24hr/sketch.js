var disData; //global variable so we can get the callback in the draw loop
var x =0; //for animate

function setup() {
  createCanvas(600, 600);
  background(255);
// setInterval is a JavaScript function that repeats a specified time interval

 askDO();//now loadJSON is in its own function, askDO 
 setInterval(askDO, 6000);  //get data every 6 seconds (ie 6000 milisecs) (you can change this time to whatever you want)
 //you really only need to getData every 5 minute (300000 ms) bc that is how often the server is updated

// I also decided to put everything else I am using in the askDO function to update 
// the whole drawing at the same interval
}

//function for calling and loading the data 
function gotData(data) {
  //hold our data so we can use it in draw
  disData = data;
}

function draw() {
  noFill();
  textSize(12);
  stroke(0);
  //strokeWeight(3);
  ellipse(width/2, height/2, 50, 50);
  ellipse(width/2, height/2, 300, 300);
  text("fish dying here", width/2, height/2);
  text("high on oxygen", 60, height/2);

}



function askDO(){
  //loading JSON from a URL path. gotData is the callback
  loadJSON("https://ofmpub.epa.gov/rsig/rsigserver?SERVICE=NWIS&REQUEST=download&SITEID=01589485&PARAMS=00300&FORMAT=json&PERIOD=P1D", gotData);

if (disData) {
    //query that specific dissolved oxygen value 
    var dissolvedO = disData.value.timeSeries[0].values[0].value;
    //the api is updated every 5 minutes; that means there are 288 values in 24 hrs
    //if you want to add all you can, but I decided to just average one value per hour and dived by 24
  
    var avgDO = (
      (
      parseFloat(dissolvedO[0].value) + 
      parseFloat(dissolvedO[11].value) + 
      parseFloat(dissolvedO[23].value) + 
      parseFloat(dissolvedO[32].value) + 
      parseFloat(dissolvedO[44].value) + 
      parseFloat(dissolvedO[56].value) + 
      parseFloat(dissolvedO[68].value) + 
      parseFloat(dissolvedO[80].value) + 
      parseFloat(dissolvedO[92].value) + 
      parseFloat(dissolvedO[104].value) + 
      parseFloat(dissolvedO[116].value) + 
      parseFloat(dissolvedO[128].value) + 
      parseFloat(dissolvedO[140].value) + 
      parseFloat(dissolvedO[152].value) + 
      parseFloat(dissolvedO[164].value) + 
      parseFloat(dissolvedO[176].value) + 
      parseFloat(dissolvedO[188].value) + 
      parseFloat(dissolvedO[200].value) + 
      parseFloat(dissolvedO[212].value) + 
      parseFloat(dissolvedO[224].value) + 
      parseFloat(dissolvedO[236].value) + 
      parseFloat(dissolvedO[248].value) + 
      parseFloat(dissolvedO[260].value) + 
      parseFloat(dissolvedO[272].value))
      /24
      ); 

  //the above is long-hand (but more easily understood) for the equation below
  /*
    var sum = 0;
    // sum = sum + dissolvedO[realIndex].value;
     for(i = 0; i< dissolvedO.length; i++){
      realDO=parseFloat(dissolvedO[i].value);
        if ((i % ((24/2) - 1)) == 0) {
          console.log(dissolvedO[i].value)
          sum = sum + realDO;
        }
     }
      var avgDO = sum/24;
        */
    print(avgDO);
    
    //i am mapping so that the circle size can be larger
    var mapDO = map(avgDO, 6, 13, 0, 300); //using 6 as the lowest possible value for dissolved oxygen before sea life cannot survive
    //print(mapDO);
    
    noStroke();
    fill(0, 150, 200, 10);
    ellipse(width/2, height/2, mapDO, mapDO);
  }
}




