//use Immediately-Invoked Function Expression (IIFE)
var myJsLib = (function (myJsLib) {

    var createPageView = function (pageViewElement) {

        return {
            el: pageViewElement,

        };
    };

    var createTabs = function (tabElements, pageViewElements) {
        var tabs = [];

        [].forEach.call(tabElements, function (el, index, array) {

            var tab = {
                el: el,
                pageView: createPageView(pageViewElements[index]),

                disable: function () {
                    this.el.classList.add("disabled");
                },
                enable: function () {
                    this.el.classList.remove("disabled");
                },
                isDisabled: function () {
                    return this.el.classList.contains("disabled");
                },
                activate: function () {
                    if (!this.isDisabled()) {
                        this.el.classList.add("active");
                    }
                },
                deactivate: function () {
                    if (!this.isDisabled()) {
                        this.el.classList.remove("active");
                    }
                },
                isActive: function () {
                    return this.el.classList.contains("active");
                },

            };

            tabs.push(tab);
        });

        return tabs;
    };

    myJsLib.createTabStrip = function (elementId) {
        var elm = document.getElementById(elementId);
        //if element dosnt exist create it
        if (!elm) {
            elm = document.createElement("DIV");
            elm.id = elementId;
        }

        var tabElements = elm.querySelectorAll(".tab");
        var pageViewElements = elm.querySelectorAll(".pageview");

        var tabs = createTabs(tabElements, pageViewElements);


        return {
            tabs: tabs,
            pageViews: tabs.pageViews
        };

    }

    return myJsLib;
}(myJsLib || {})); // if myJsLib doesn't exist pass an Object Literal
