---
layout: project-template
title:  "Arduino Embedded Project"
image:  arduino-mega-2560-pinout.jpg
link:   https://link.link
---
Who wouldn't want to build a robot? Over the summer I had the opportunity and I took it. Admittedly, it wasn't high art like the Roomba or a self-driving car but it was still a robot.

In June I attended an Arduino workshop at LVL1 Hackerspace in Louisville. The LVL1 guys have an awesome shop with plenty of room and tons of cool gear. If you're an inventor they have what you need, including an enormous laser cutter for precision shaping and multiple 3D printers.  Oops, I digress...

The robot I made was built on an Arduino microcontroller. A microcontroller (or MCU, short for microcontroller unit) is a little computer on an integrated circuit or microchip. Like a miniaturized version of a desktop computer tower, it contains a processor core, memory, and programmable input/output ports or peripherals.  The Arduino board is able to read inputs such as light sensors, button presses, or a Tweet and turn it into an output.  Outputs are typically something like activating a motor, switching on an LED, or sending another Twitter message, for example.

The first hurdle I faced was wiring up the board with the proper connections.  Some of the inputs/outputs are dedicated and have limits to their voltage capacities so it's important to be precise. One thing that made this easier than I'd anticipated was the lack of required soldering. It was just a matter of threading the wires (or jump cables/jumper wires as I've heard them called) into the appropriate sockets and the pins on the end of the wires held them in place. Once the wires and the peripherals were mounted it was time to write some code.

{% include image.html url="/images/arduino-ide.png" description="Arduino IDE" %}{: .float--right }

The next step was loading my laptop with the latest version of the eponymously named Arduino IDE (integrated development environment). For the lay person, such as myself, an IDE is a fancy way of saying it's an all-in-one application that includes everything you need to get begin programming your robot. The interface is straightforward and easy enough to use to get started quickly. The platform is built on the C programming language, the grandfather of many of today's more modern languages.  

A typical program looks like this:

    int potInputPin = 0;
    int servoOutputPin = 11;
    int smallAngleLEDPin = 2;
    int largeAngleLEDPin = 4;
    int minValue = 64;
    int maxValue = 192;
    int analogValue = 512;

    void setup()
    {
      pinMode(servoOutputPin, OUTPUT);
      pinMode(smallAngleLEDPin, OUTPUT);
      pinMode(largeAngleLEDPin, OUTPUT);
      analogWrite(servoOutputPin, analogValue);
      Serial.begin(9600);
    }

    void loop()
    {
      analogValue = analogRead(potInputPin);
      Serial.println(analogValue);
      analogValue = analogValue / 4;
      Serial.println(analogValue);

      if (analogValue < minValue)
      {
        digitalWrite(smallAngleLEDPin, HIGH);
      }
      else if (analogValue > maxValue)
      {
        digitalWrite(largeAngleLEDPin, HIGH);
      }
      else
      {
        digitalWrite(smallAngleLEDPin, LOW);
        digitalWrite(largeAngleLEDPin, LOW);
        analogWrite(servoOutputPin, analogValue);
      }
      delay(10);
    }

You can see here how integers point toward the pin positions of the wires on the board. In essence, you're just telling Arduino where to look for input and where to send the output. This particular program operates a servo, which a small device with an output shaft. The output shaft rotates and allows control surfaces, like radio controlled airplane rudders, to be positioned properly. I used a simple knob to communicate with the servo. Based on how far I turned the knob the servo responded in kind. There were also LEDs that indicated if you were approaching the minimum or maximum positions for the servo.  

I learned a ton from this experience and had a great time too. More of what's happening behind the mysterious technological curtain has been revealed to me. I can see how a lot of companies are using these technologies in useful, real world ways. Like telecom companies monitoring service connections and sending alerts to your phone when there's an interruption, smart devices notifying you if/when a specified event occurs, and of course, how product interactions like button presses produce expected results.
