//use Immediately-Invoked Function Expression (IIFE)
var myJsLib = (function (myJsLib) {

    var createTabs = function (tabs) {

    };
    
    myJsLib.createTabStrip = function (elementId) {
        var elm = document.getElementById(elementId);
        //if element dosnt exist create it
        if (!elm) {
            elm = document.createElement("DIV");
            elm.id = elementId;
        }

        var tabs = elm.querySelectorAll(".tab");


        return {
            tabs: createTabs(tabs)
        };

    }

    return myJsLib;
}(myJsLib || {})); // if myJsLib doesn't exist pass an Object Literal
