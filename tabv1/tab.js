//use Immediately-Invoked Function Expression (IIFE)
var myJsLib = (function (myJsLib) {

    var createPageView = function (pageViewElement) {

        return {
            el: pageViewElement,
            isDisabled: function () {
                return this.el.classList.contains("disabled");
            },
            activate: function () {
                if (!this.isDisabled()) {
                    this.el.classList.add("active");
                    this.el.classList.remove("hide");
                }
            },
            deactivate: function () {
                if (!this.isDisabled()) {
                    this.el.classList.remove("active");
                    this.el.classList.add("hide");
                }
            },
        };
    };

    var createTabs = function (tabElements, pageViewElements) {
        var tabs = [];

        [].forEach.call(tabElements, function (el, index, array) {

            var tab = {
                el: el,
                parent: null,
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
                        this.pageView.activate();
                    }
                },
                deactivate: function () {
                    if (!this.isDisabled()) {
                        this.el.classList.remove("active");
                        this.pageView.deactivate();
                    }
                },
                isActive: function () {
                    return this.el.classList.contains("active");
                },
                onclick: function () {
                    this.parent.deactivateAll();
                    this.activate();
                }
            };

            tab.el.onclick = function () {
                tab.onclick.call(tab);
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
        var pageViewElements = elm.querySelectorAll(".pageView");

        var tabs = createTabs(tabElements, pageViewElements);


        var tabStrip = {
            tabs: tabs,
            //pageViews: tabs.pageViews,
            deactivateAll: function () {
                this.tabs.forEach(function (element, index, array) {
                    element.deactivate();
                });
            }
        };

        tabStrip.tabs.forEach(function (element, index, array) {
            element.parent = tabStrip;
        });

        return tabStrip;

    }

    return myJsLib;
}(myJsLib || {})); // if myJsLib doesn't exist pass an Object Literal
