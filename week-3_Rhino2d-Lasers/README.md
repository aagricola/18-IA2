# Welcome to the DFab Lab
## Today:
- Discuss Installation reading
- Import from Illustrator to Rhino
- Learn 2D design basics in Rhino
- Introduction to best laser cutter practices
- Groups of two for test cuts

## Laser Cutter projects

You don't have to look very far these days to find artists and designers employing digital fabrication in their work. Laser cutting is being utilised

in **graphic design**

![enter image description here](https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/22836324214067.5852e9528a96c.gif)

Business Card Designed by [Huan Nguyen](http://huan-nguyen.com/)

**in interior design**

![enter image description here](http://68.media.tumblr.com/9d48f34cef9abdefeeff3dfe8caa3c21/tumblr_msa82peNgQ1qbvfdgo1_500.jpg)

This is an installation at a design consultancy in Portland

**in fashion**

![enter image description here](https://static1.squarespace.com/static/58fc6d3303596e8981c04a55/t/590485683a04117659c06d37/1493479458185/01-14_2_Elvirathart.jpg?format=1000w)

Drawn Scarf by [Elvira 'T Hart](https://www.elvirathart.com/drawn-scarf)

**in packaging**

![enter image description here](https://s-media-cache-ak0.pinimg.com/originals/c9/85/e0/c985e08ccb73fc430bafa4fabefab600.jpg)

**AND in art**

![enter image description here](http://s3-eu-west-1.amazonaws.com/olafureliasson.net/objektimages_final/IMG_MDA114599_1600px.jpg)

Olafur Eliasson

## Intro to Rhino
- command line
- set your units in settings
- O snaps (End is very useful. also quad and int)
- line segment vs. polyline
- Join (line segments) (ctrl + J)
- Explode
- Rectangles (built in fillet)
- Rotate and Mirror
- Polygons
- Circles
- Split vs. trim
- Text Object
- hatch
- Caution of bringing in Illustrator pencil or brush strokes (use Sel Dup to find duplicate lines)

[The Rhino website](https://wiki.mcneel.com/rhino/home) has some easy follow along tutorials. I recommend these if you want to go further with modeling to watch and follow along.

## Laser Cutting
We will be learning the best methods for using the Universal Laser Cutters.

When you are modeling you will use a different layer for different types of cuts:

 - Etch = red
 - Cut = blue
 - Raster Engrave = green
 - Test = magenta
 - Modeling = black (no cut)

Set Properties: When you are finished with your design in Rhino, you will go to File > Print

 1.  Set scale to 1:1
 2.  Select your window
 3.  Go into Properties
 4.  Select all properties and set to Speed = 15, Power = 15, PPi = 200 (this sets a base line)
 5. Turn Air Assist on: Flow = Air , Flowrate = 50%
 6. Measure your material with a caliper
 7. **Set your Z based on the thickness of your material.** (Measure with a caliper) WARNING: if you miss this step, you could break the laser and it is VERY VERY VERY expensive to replace.

Cut order is based on the order listed. Always have the raster engraving and etching happen before the cutting. You can change the order by clicking and dragging.
Less power is how you reduce burn
For wood you can set PPI to 200, for plexi you can set it to 1000. **Consult the notebook next to the computer for other material guidelines, but always do your own tests before you cut your design.**

**Test Cutting:** Always start with a setting that is too low, and run a series of tests on your actual material increasing power or (decreasing speed to increase the effective power) until you reach a setting that cuts through but does not start a flame.
I use a small circle and start with the base line settings and increase the power until I get the desired cut. Here are a few of the cut settings I made:
Cardboard: Power = 30, Speed = 12, PPI = 200
Plexi: Power = 100, Speed = 15, and PPI= 1000
Canvas: Power = 50, Speed = 20, PPI= 200
Felt: Power = 12, Speed = 15, PPI= 200
Cotton: Power = 15, Speed = 15, PPI= 200

8. Send to Cut
9. **Turn on the exhaust** (big green button) on the wall.
10. Place your material.
11. Log onto the computer and open your file
12. Print and set your print settings
13. This is where you will first run your test cut
14. Press Print
15. Open the Universal Laser Control Panel
16. Use the move tool if necessary to move your file
17. Check the alignment of the laser
18. Calculate your cut time
19. Press the big play button
**Watch it cut!**
*NEVER LEAVE THE MACHINE CUTTING UNATTENDED.

Materials: Anything on the Paper, mat board, card stock, Cardboard, chipboard, Plexiglas, organic fabrics (spray lightly with water first), solid wood, plywood (fewer plys is better), cork.
If you would like to cut a material that is not on this list, please ask a tech or Tim if it is ok first.

IF YOU'RE UNSURE ABOUT ANYTHING, ASK! If the lab is open, there will always be a tech on duty willing to answer simple questions and concerns.
IF ANYTHING BREAKS let someone know. You will not get in trouble, and it is more helpful to know right away so that it can be fixed ASAP.

## Banned Materials

Never cut the following materials on the laser, they can create poisonous gases and actually damage the device:

Anything containing chlorine (will create toxic vapor)
- Silicone
- PVC
- Vinyl
- Molskine covers
- Anything containing the word “poly”
- Lexan (Caution: it looks like plexi! Usually sold at hardware stores)

RULE: If you don’t know what the material is, do not cut it on the laser.

## Acrylic and Plexi Resources

![lamp](https://i.kinja-img.com/gawker-media/image/upload/t_original/1423281463868213062.gif)

[Studio Cheha](https://www.gizmodo.com.au/2015/09/the-shade-on-these-perfectly-flat-lamps-is-just-an-optical-illusion/)

[Lucite Light Acrylic](https://www.inventables.com/technologies/lucite-light-guide-acrylic-sheet)

[Inventables](https://www.inventables.com/) is a great resource for plexiglass as well as project inspirations

## Plexi Adhesive

![adhesive](http://deron.meranda.us/create/case-modding/avocet/reservoir/cement.jpg)

Acrylic can be glued using special solvents and syringes.  The bond is strong, but the solvents are toxic and typically leave the plastic cloudy and pock-marked.

Acetone can also be used as a welding solvent for plexi.

## Laser Cutting Assignment
Partner up and made a really simple 2d design to cut out on the laser cutter. Draw a shape to cut out and draw something to engrave inside the shape. One of you will set the properties for the cutline and the other will setup the properties for the engrave lines.

## Project 1: Modularity

![maze](https://dzevsq2emy08i.cloudfront.net/paperclip/project_image_uploaded_images/5036/carousel/1458227694_PS_IMG_5445.jpg?1458227694)
[marble maze](https://www.inventables.com/projects/marble-maze#overview)

Modularity involves the arrangement of one
or more elements to produce a multitude of
forms. Design something made of fixed parts that can
be recombined in multiple configurations.
Design the forms so that they can handled
be played with. Use any of the new tools
we have learned for the design. You should digitally fabricate some of the forms, but you do not have to digitally fabricate all of the forms. For example, wooden dowels would be difficult to fabricate and very easy to buy at the MICA store. You can
always return to using Illustrator as a design tool, but I would like you to first attempt using Rhino. Two design challenges exist here. One is thinking about transforming two dimensional, planar material into a three dimensional object, model, toy, game, ect... The other is making something that can go from being compact, flat seperate pieces, to being larger in its  assembled form.

Due: Feb. 13 for a short in-class critique

## Modular Inspiration

![cork](http://img.edilportale.com/news/j_36037_14.jpg)

Granorte Design

[joints](http://www.domusweb.it/content/dam/domusweb/en/news/2015/08/01/olle_gellert_3d_printed_joints/rmedium/domus-02-gellert-3d-printed-joints.jpg)

Ollé Gellért, 3D printed joints

![felt](http://media.chicagomag.com//Chicago-Home/Design-Dose/June-2009/Design-Forecast-Cloudy/ling.jpg?ver=1246056859)

 Ligne Roset

## Homework
- Sketch ideas for Project 1 : Next week is mostly a work week with an introduction to 3d modeling and 3d printing
- Watch Rhino tutorials on Lynda for a more in depth look at [2d modeling](https://www.lynda.com/Rhino-tutorials/Understanding-lines-polylines/133324/153910-4.html?autoplay=true) . Also, look a chapter 9 for more on modeling aids.

## Other resources
[Wonderful ITP lesson on Enclosures for electronics](https://itp.nyu.edu/fab/intro_fab/week-4-enclosures/)

[Embelishing Laser Engraving](https://itp.nyu.edu/fab/embellish-laser-etching/#more-610)

[Engrave a Potentiometer Dial](https://itp.nyu.edu/fab/make-a-potentiometer-dial/#more-583)

[Key to designing living hinge](http://blog.ponoko.com/2015/07/06/how-to-design-a-living-hinge/)

[Easy laser cut box joint design](http://www.makercase.com/)
