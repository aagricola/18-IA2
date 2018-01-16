import processing.serial.*; //import serial library

import processing.sound.*;//sound library

SoundFile buzzer; //this is our buzzer sound

Serial myPort;  // Create object from Serial class
int val;      // Data received from the serial port

void setup() 
{
  size(200, 200);
  // I know that I have 2 ports in the serial list on my mac
  // so I open Serial.list()[1].
  // Open whatever port is the one you're using in Arduino.
  String portName = Serial.list()[1];
  myPort = new Serial(this, portName, 9600);

  //Load a soundfile
  buzzer = new SoundFile(this, "buzzer.mp3");
}

void draw()
{
  if ( myPort.available() > 0) {  // If data is available,
    val = myPort.read();         // read it and store it in val
  }
  background(255);     // Set background to white
  if (val == 1) {     //if the serial data is 1
    buzzer.play();
    background(0, 255, 0);
  } else {               // If the serial value is 0
    background(255);
    buzzer.stop();
  }
}