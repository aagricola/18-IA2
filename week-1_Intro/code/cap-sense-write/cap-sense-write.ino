#include <CapacitiveSensor.h>


CapacitiveSensor   cs_4_6 = CapacitiveSensor(4,6);   

int LED = 13;
long sensor_reading;

void setup()                    
{
   pinMode(LED, OUTPUT);
   Serial.begin(9600);
}

void loop()                    
{
    sensor_reading =  cs_4_6.capacitiveSensor(30);

    Serial.println(sensor_reading);

    if (sensor_reading > 100) { //if sensor is touched
      Serial.write(1); //send 1 to Processing. this also may need to be sent as a byte instead of int - (Serial.write((byte)1)
    } else { //if not touched
      Serial.write(0);//send 0 to processing
    }
    delay(500); //this delay is to slow down the amount of data being sent to processing              
}
