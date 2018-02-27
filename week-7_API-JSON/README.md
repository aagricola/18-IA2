# Hello!

## Today:
- Critique modularity project
- Learn about API's
- What is JSON
- How to work with JSON Files

## API

It stands for Application Programing Interface
It is the interface that allows two programs to talk!
API's give you data that is changing over time.

It sometimes requires a key and learning to query (ask for a certain set of data)

Common ways to find data is to first search and then ideally to find some data with existing examples of querying that data

Standard formats that you will find are:
- CSV - Tabular data (like google spreadsheets)(p5 easily works with CSV)
- XML
- JSON - Java Script Object Notation (p5 easily works with JSON)
- txt Files
- PDF
- Data on a web page

## JSON

Remember Objects?
There is this way of making an object in p5:

  var bug = {
    name: "june",
    speed: .5,
    size: 3
  }

  then we could access this data in the draw loop by saying:

  text(bug.name, x, x);
  textSize(bug.size);
  x += random(-bug.speed, bug.speed);

  This is working with data - just like working with JSON Data

  We could make a separate file with data for every single bug
  A file titled like your object - bug.json - and in the same project folder
  without the var and name
  {
    "name": "june",
    "speed": .5,
    "size": 3,
  }

  It can get more complex with arrays, and the syntax is very important.
  You can check your JSON with [a JSON formatter](https://jsonformatter.curiousconcept.com/)

  Then you can load into your sketch by saying

  function preload(){
  //preload all the datasets
  bug = loadJSON("bug.json");
}

  [open source repository of JSON files about different topics](https://github.com/dariusk/corpora)


## Water Quality Web Service

To view API querys online formatted in JSON, [install this chrome extension](https://chrome.google.com/webstore/detail/json-formatter/bcjindcccaagfpapjjmafapmmgkkhgoa?hl=en)

[This is the server name for the water quality data https://ofmpub.epa.gov/rsig/rsigserver](https://ofmpub.epa.gov/rsig/rsigserver), which you can use to obtain recent data from the Jones Falls sensors. The web service takes a list of parameters (separated by ampersands), which are specified below. I have also included some examples that show how it all fits together.

Parameters:
-----------------
SERVICE: Always specify NWIS

REQUEST: Always specify download

SITEID: Always specify 01589485 (the USGS ID for the Jones Falls sensors)

PARAMS: Choose one from the following list (you cannot request more than one at a time). Upper and lower refer to measurements taken above and below the halocline, respectively.

   - 00010 = Temperature upper and lower
   - 00065 = Gage height
   - 00095 = Specific conductivity upper and lower
   - 00480 = Salinity upper and lower
  - 00300 = Dissolved oxygen, upper and lower
  - 00400 = PH upper and lower
  - 63680 = Turbidity upper and lower
  -  99133 = NO3+NO2 upper (aka Nitrates)
  - 72254 = Water velocity



FORMAT: Choose one:

   - ascii (simple CSV text file with only the timestamp and the requested data)
   - json (Javascript object notation with a lot of extraneous information)

PERIOD: Optional parameter. If omitted, you will get the most recent measurement. Otherwise, you can specify a number of hours or days (always the most recent).

  - PT2H = two hours
  - PT5H = five hours
  - P1D = one day
  - P2D = two days
  etc.


Examples:
--------------
Example 1: Get the most recent temperature data:
https://ofmpub.epa.gov/rsig/rsigserver?SERVICE=NWIS&REQUEST=download&SITEID=01589485&PARAMS=00010&FORMAT=json

Example 2: Get the last three hours of temperature data:
https://ofmpub.epa.gov/rsig/rsigserver?SERVICE=NWIS&REQUEST=download&SITEID=01589485&PARAMS=00010&FORMAT=json&PERIOD=PT3H

Example 3: Get the last day of temperature data:
https://ofmpub.epa.gov/rsig/rsigserver?SERVICE=NWIS&REQUEST=download&SITEID=01589485&PARAMS=00010&FORMAT=json&PERIOD=P1D

Example 4: Get the last week of dissolved oxygen data:
https://ofmpub.epa.gov/rsig/rsigserver?SERVICE=NWIS&REQUEST=download&SITEID=01589485&PARAMS=00300&FORMAT=json&PERIOD=P7D


## Homework
- Make a sketch using your groups data
- Join your slack group
- Next week will be a work week!

## References

[link to p5.js editor](https://github.com/processing/p5.js-editor/releases)

If you are interested in working in Processing, that is very easy. Especially if you read [this section on working with data in Processing](https://processing.org/tutorials/data/), by Daniel Shiffman.

[Learning Processing - Data, Github repository](https://github.com/shiffman/LearningProcessing/tree/master/chp18_data)

[Daniel Shiffman video of using Open Weather API](https://www.youtube.com/watch?v=ecT42O6I_WI)
