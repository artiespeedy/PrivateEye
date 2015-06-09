var currentCaseNumber = 0;
var stampUp = true;

var redX = {
    type: "image",
	name: "X",
    source: "images/Cross.png",
    x: 0,
	y: 0,
    width: 130,
	height: 120,
    fromCenter: true,
    imageSmoothing: false
};

var stamp = {
    layer: true,
    type: "image",
	name: "stamp",
    source: "images/Stamp.png",
    x: 880,
	y: 460,
    width: 80,
	height: 130,
    fromCenter: false,
    imageSmoothing: false,
    click: function (layer) {
        if (stampUp) {
            stampUp = false;
            $(this).animateLayer(layer, {
                y: 450
            }, 200); 
        } else {
            stampUp = true;
            $(this).animateLayer(layer, {
                y: 460
            }, 200); 
        }
        println("Stamp");
    }
};

var port1 = {
    type: "image",
	name: "P1",
    source: "images/Port1.png",
    x: 320,
	y: 110,
    width: 130,
	height: 110,
    fromCenter: false,
    imageSmoothing: false,
	click: function (layer) {
		"use strict";
        if (stampUp) {
            console.log("Hi");
            switch (currentCaseNumber) {
            case 1:
                interrogate(caseData1[0]);
                break;
            case 2:
                interrogate(caseData2[0]);
                break;
            case 3:
                interrogate(caseData3[0]);
                break;
            default:
                break;
            }
        } else {
            redX.x = layer.eventX - 10;
            redX.y = layer.eventY - 20;
            $("#papers").drawImage(redX);
            setTimeout(function () {
                currentCases[currentCaseNumber - 1].isDone = true;
                mainMenu();
                clearOCases();
                clearPapers();
            }, 1000);
        }
	}
};

var port2 = {
    type: "image",
	name: "P2",
    source: "images/Port2.png",
    x: 470,
	y: 110,
    width: 120,
	height: 110,
    fromCenter: false,
    imageSmoothing: false,
	click: function (layer) {
		"use strict";
        if (stampUp) {
            console.log("Hi");
            switch (currentCaseNumber) {
            case 1:
                interrogate(caseData1[1]);
                break;
            case 2:
                interrogate(caseData2[1]);
                break;
            case 3:
                interrogate(caseData3[1]);
                break;
            default:
                break;
            }
        } else {
            redX.x = layer.eventX - 10;
            redX.y = layer.eventY - 20;
            $("#papers").drawImage(redX);
            setTimeout(function () {
                currentCases[currentCaseNumber - 1].isDone = true;
                mainMenu();
                clearOCases();
                clearPapers();
            }, 1000);
        }
	}
};

var port3 = {
    type: "image",
	name: "P3",
    source: "images/Port3.png",
    x: 610,
	y: 110,
    width: 120,
	height: 110,
    fromCenter: false,
    imageSmoothing: false,
	click: function (layer) {
		"use strict";
        if (stampUp) {
            console.log("Hi");
            switch (currentCaseNumber) {
            case 1:
                interrogate(caseData1[2]);
                break;
            case 2:
                interrogate(caseData2[2]);
                break;
            case 3:
                interrogate(caseData3[2]);
                break;
            default:
                break;
            }
        } else {
            redX.x = layer.eventX - 10;
            redX.y = layer.eventY - 20;
            $("#papers").drawImage(redX);
            setTimeout(function () {
                currentCases[currentCaseNumber - 1].isDone = true;
                mainMenu();
                clearOCases();
                clearPapers();
            }, 1000);
        }
	}
};

var port4 = {
    type: "image",
	name: "P4",
    source: "images/Port4.png",
    x: 320,
	y: 240,
    width: 130,
	height: 110,
    fromCenter: false,
    imageSmoothing: false,
	click: function (layer) {
		"use strict";
        if (stampUp) {
            console.log("Hi");
            switch (currentCaseNumber) {
            case 1:
                interrogate(caseData1[3]);
                break;
            case 2:
                interrogate(caseData2[3]);
                break;
            case 3:
                interrogate(caseData3[3]);
                break;
            default:
                break;
            }
        } else {
            redX.x = layer.eventX - 10;
            redX.y = layer.eventY - 20;
            $("#papers").drawImage(redX);
            setTimeout(function () {
                currentCases[currentCaseNumber - 1].isDone = true;
                mainMenu();
                clearOCases();
                clearPapers();
            }, 1000);
        }
	}
};

var port5 = {
    type: "image",
	name: "P5",
    source: "images/Port5.png",
    x: 470,
	y: 240,
    width: 130,
	height: 110,
    fromCenter: false,
    imageSmoothing: false,
	click: function (layer) {
		"use strict";
        if (stampUp) {
            console.log("Hi");
            switch (currentCaseNumber) {
            case 1:
                interrogate(caseData1[4]);
                break;
            case 2:
                interrogate(caseData2[4]);
                break;
            case 3:
                interrogate(caseData3[4]);
                break;
            default:
                break;
            }
        } else {
            redX.x = layer.eventX - 10;
            redX.y = layer.eventY - 20;
            $("#papers").drawImage(redX);
            setTimeout(function () {
                currentCases[currentCaseNumber - 1].isDone = true;
                mainMenu();
                clearOCases();
                clearPapers();
            }, 1000);
        }
	}
};

var port6 = {
    type: "image",
	name: "P6",
    source: "images/Port6.png",
    x: 620,
	y: 240,
    width: 130,
	height: 110,
    fromCenter: false,
    imageSmoothing: false,
	click: function (layer) {
		"use strict";
            if (stampUp) {
            console.log("Hi");
            switch (currentCaseNumber) {
            case 1:
                interrogate(caseData1[5]);
                break;
            case 2:
                interrogate(caseData2[5]);
                break;
            case 3:
                interrogate(caseData3[5]);
                break;
            default:
                break;
            }
        } else {
            redX.x = layer.eventX - 10;
            redX.y = layer.eventY - 20;
            $("#papers").drawImage(redX);
            setTimeout(function () {
                currentCases[currentCaseNumber - 1].isDone = true;
                mainMenu();
                clearOCases();
                clearPapers();
            }, 1000);
        }
	}
};

function papers(number) {
	"use strict";
    stampUp = true;
	currentCaseNumber = number;
    var ctxp = document.getElementById('papers').getContext("2d");
    ctxp.imageSmoothingEnabled = false;
    ctxp.webkitImageSmoothingEnabled = false;
    ctxp.mozImageSmoothingEnabled = false;
    
    $("#papers").css('z-index', 3);
    $("#papers").addLayer(port1);
    $("#papers").addLayer(port2);
    $("#papers").addLayer(port3);
    $("#papers").addLayer(port4);
    $("#papers").addLayer(port5);
    $("#papers").addLayer(port6);
    $("#papers").addLayer(stamp);
    
    $("#papers").drawImage({
        layer: true, name: "WArrow",
        fromCenter: false,
        source: "images/WhiteArrow.png",
        x: 50, y: 50,
        height: 45, width: 45,
        imageSmoothing: false,
        click: function(layers) {
            clearOCases();
            clearPapers();
            mainMenu();
        }
    });
    
    $("#papers").drawLayers();
}

function clearPapers() {
    $("#papers").removeLayers();
    $("#papers").css('z-index', 0);
}