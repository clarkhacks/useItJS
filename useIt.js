var useIt;
var ui;
useIt = ui = function () {
    "use strict";
    function set(template, domID, create) {
        if (!create) {
            create = false;
        }
        if (create === true) {
            var frag = document.createElement("fragment");
            frag.setAttribute("id", domID);
            document.body.appendChild(frag);
        }
        if (!template) {
            console.error("useIt.js Error: ", "No source defined");
        }
        var request = new XMLHttpRequest();

        request.open("GET", template, true);

        request.onload = function () {
            if (request.status >= 200 && request.status < 400) {
                var resp = request.responseText;

                document.getElementById(domID).innerHTML = resp;
            }
            if (request.status >= 400) {
                console.error("useIt.js Error: ", "Template not found");
            }
        };

        request.send();
    }

    function js(src, callback) {
        var head = document.getElementsByTagName("head")[0];
        var script = document.createElement("script");
        script.type = "text/javascript";
        script.src = src;
        script.onreadystatechange = callback;
        script.onload = callback;
        head.appendChild(script);
    }

    function css(src) {
        var head = document.getElementsByTagName("head")[0];
        var link = document.createElement("link");
        link.rel = "stylesheet";
        link.type = "text/css";
        link.href = src;
        link.media = "all";
        head.appendChild(link);
    }
    ui.set = set;
    ui.js = js;
    ui.css = css;

};
