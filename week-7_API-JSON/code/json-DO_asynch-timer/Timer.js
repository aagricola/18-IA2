// Daniel Shiffman
// http://www.learningprocessing.com

// Example 18-7: Loading a URL asynchronously

// Timer Class from Chapter 10

function Timer(tempTotalTime) {

  var savedTime;
  var running = false;
  var totalTime;

  totalTime = tempTotalTime;
  

  function start() {
    running = true;
    savedTime = millis();
  }

  function isFinished() {
    var passedTime = millis() - savedTime;
    if (running && passedTime > totalTime) {
      running = false;
      return true;
    } else {
      return false;
    }
  }

}