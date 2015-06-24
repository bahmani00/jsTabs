//Orginality: http://code.tutsplus.com/courses/object-oriented-javascript

//define our namespace
 myJsLib

//create a tabStrip by passing a div element
var tabStrip = myJsLib.createTabStrip("divTabStrip");

//get all tabs
tabStrip.tabs;

//access an individual tab
var tab = tabStrip.tabs[0];

//enable/disable a tab
tab.setEnable(true | false);
//or 
tab.enable = true | false;
