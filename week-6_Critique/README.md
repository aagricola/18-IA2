# Hello!

## Today:
- Critique modularity project
- Document and post to Canvas
- Enjoy the weather

## Homework
- Post documentation of projects
- Learn what is an API and how to work with JSON files by watching [Daniel Shiffman's videos, 10.1-10.3](https://www.youtube.com/watch?v=rJaXOFfwGVw&index=1&list=PLRqwX-V7Uu6a-SQiI4RtIwuOrLJGnel0r)
- Read "Formulating Your Brief", located in today's folder. Still keep an open mind as you read. It will give you helpful things to consider, but we do no have to be so literal in how we translate our data. Think more in terms of the Exploratory model that is mentioned in this chapter.


## If you want to start playing with Water Quality Data:

Install this extension to view API querys online formatted in JSON, [install this chrome extension](https://chrome.google.com/webstore/detail/json-formatter/bcjindcccaagfpapjjmafapmmgkkhgoa?hl=en)

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
