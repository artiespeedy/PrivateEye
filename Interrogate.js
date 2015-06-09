var isLampOn = false;
var currentCase = null;
var currentLevel = null;
var currentResponse = null;
var isBaseLayer = true;

var light = {
	name: "lamp",
    imageSmoothing: false,
	fromCenter: false,
    source: "images/LampLight.png",
    intangible: true,
    x: 0,
	y: 0,
	width: 1000,
	height: 600
};

function clearMessage() {
	$("#interrogation-messages").removeLayer("BigBubble").drawLayers();
	$("#response").text("");
}

function toggleLamp() {
    if (isLampOn) {
        isLampOn = false;
        $("#interrogation").removeLayer("lamp").drawLayers();
    } else {
        isLampOn = true;
        $("#interrogation").drawImage(light);
    }
}

var bg = {
	name: "iBackground",
    imageSmoothing: false,
	fromCenter: false,
    source: "images/InterrogationBackground.png",
    x: 0,
	y: 0,
	width: 1000,
	height: 600
};

var lamp = {
	name: "lamp",
    imageSmoothing: false,
	fromCenter: false,
    source: "images/Lamp.png",
    x: 670,
	y: 240,
	width: 130,
	height: 190,
    click: function (layer) {
		"use strict";
        toggleLamp();
    }
};

function fNext1() {
    println("Fnext");
    currentLevel = currentCase.splice(0, 1)[0];
    println(currentLevel.response.questions);
    println(currentLevel.response.line);
    var response = currentLevel.response.line;
    currentLevel = currentLevel.response.questions;
    message(response, currentLevel);
}

function fNext2() {
    println("Fnext");
    currentLevel = currentCase.splice(1, 1)[0];
    println(currentLevel.response.questions);
    println(currentLevel.response.line);
    var response = currentLevel.response.line;
    currentLevel = currentLevel.response.questions;
    message(response, currentLevel);
}

function fNext3() {
    println("Fnext");
    currentLevel = currentCase.splice(2, 1)[0];
    println(currentLevel.response.questions);
    println(currentLevel.response.line);
    var response = currentLevel.response.line;
    currentLevel = currentLevel.response.questions;
    message(response, currentLevel);
}

var fb1 = {
    layer: true,
	name: "FB1",
	imageSmoothing: false,
	fromCenter: false,
    source: "images/iButton.png",
    x: 190,
	y: 420,
	width: 620,
	height: 50,
    mousedown: function (layer) {
        fNext1();
        fIntang();
        tang();
    }
}

var fb2 = {
    layer: true,
	name: "FB2",
	imageSmoothing: false,
	fromCenter: false,
    source: "images/iButton.png",
    x: 190,
	y: 480,
	width: 620,
	height: 50,
    click: function (layer) {
        fNext2();
        fIntang();
        tang();
    }
}

var fb3 = {
    layer: true,
	name: "FB3",
	imageSmoothing: false,
	fromCenter: false,
    source: "images/iButton.png",
    x: 190,
	y: 540,
	width: 620,
	height: 50,
    click: function (layer) {
        fNext3();
        fIntang();
        tang();
    }
}
/*
function fIntang() {
    $("#interrogation-messages").animateLayer("FB3", {
        intangible: true
    });
    $("#interrogation-messages").animateLayer("FB2", {
        intangible: true
    });
    $("#interrogation-messages").animateLayer("FB1", {
        intangible: true
    });
}

function fTang() {
    $("#interrogation-messages").animateLayer("FB3", {
        intangible: false
    });
    $("#interrogation-messages").animateLayer("FB2", {
        intangible: false
    });
    $("#interrogation-messages").animateLayer("FB1", {
        intangible: false
    });
}

function intang() {
    $("#interrogation-messages").animateLayer("B3", {
        intangible: true
    });
    $("#interrogation-messages").animateLayer("B2", {
        intangible: true
    });
    $("#interrogation-messages").animateLayer("B1", {
        intangible: true
    });
}

function tang() {
    $("#interrogation-messages").animateLayer("B3", {
        intangible: false
    });
    $("#interrogation-messages").animateLayer("B2", {
        intangible: false
    });
    $("#interrogation-messages").animateLayer("B1", {
        intangible: false
    });
}*/

function fDisplayBubbles(number) {
    clearBubbles();
	switch (number) {
		case 1:
			$("#interrogation-messages").drawImage(fb1);
			break;
		case 2:
			$("#interrogation-messages").drawImage(fb1);
			$("#interrogation-messages").drawImage(fb2);
			break;
		case 3:
			$("#interrogation-messages").drawImage(fb1);
			$("#interrogation-messages").drawImage(fb2);
			$("#interrogation-messages").drawImage(fb3);
			break;
		default:
			break;
	}
}

function fQuestion() {
    clearMessage();
	fDisplayBubbles(currentCase.length);
	switch (currentCase.length) {
        case 0:
            clearI();
            break;
		case 1:
			$("#q1").text(currentCase[0].question);
			break;
		case 2:
			$("#q1").text(currentCase[0].question);
			$("#q2").text(currentCase[1].question);
			break;
		case 3:
			$("#q1").text(currentCase[0].question);
			$("#q2").text(currentCase[1].question);
			$("#q3").text(currentCase[2].question);
			break;
	}    
}

function next1() {
    println(currentLevel);
    currentLevel = currentLevel[0];
    if (currentLevel.response == null) {
        currentLevel = currentCase;
        println("f1");
        fQuestion(currentCase);
        fTang();
        intang();
    } else {
        println("currentLevel");
        currentResponse = currentLevel.response.line;
        currentLevel = currentLevel.response.questions;
        println(currentResponse, currentLevel);
        message(currentResponse, currentLevel);
    }
}

function next2() {
    println("n2");
    println(currentLevel);
    currentLevel = currentLevel[1];
    if (currentLevel.response == null) {
        currentLevel = currentCase;
        fQuestion(currentCase);
        fTang();
        intang();
    } else {
        currentResponse = currentLevel.response.line;
        currentLevel = currentLevel.response.questions;
        message(currentResponse, currentLevel);
    }
}

function next3() {
    println(currentLevel);
    currentLevel = currentLevel[2];
    if (currentLevel.response == null) {
        currentLevel = currentCase;
        fQuestion(currentCase);
        fTang();
        intang();
    } else {
        currentResponse = currentLevel.response.line;
        currentLevel = currentLevel.response.questions;
        message(currentResponse, currentLevel);
    }
}

var b1 = {
    layer: true,
	name: "B1",
	imageSmoothing: false,
	fromCenter: false,
    source: "images/iButton.png",
    x: 190,
	y: 420,
	width: 620,
	height: 50,
    mousedown: function (layer) {
        next1();
    }
}

var b2 = {
    layer: true,
	name: "B2",
	imageSmoothing: false,
	fromCenter: false,
    source: "images/iButton.png",
    x: 190,
	y: 480,
	width: 620,
	height: 50,
    click: function (layer) {
        next2();
    }
}

var b3 = {
    layer: true,
	name: "B3",
	imageSmoothing: false,
	fromCenter: false,
    source: "images/iButton.png",
    x: 190,
	y: 540,
	width: 620,
	height: 50,
    click: function (layer) {
        next3();
    }
}

var bb = {
    layer: true,
	name: "BigBubble",
	imageSmoothing: false,
	fromCenter: false,
    source: "images/InterrogationBubbleLarge.png",
    x: 0,
	y: 0,
	width: 1000,
	height: 600,
    mousedown: function (layer) {
        question(currentLevel);
    }
}

function displayBubbles(number) {
    clearBubbles();
	switch (number) {
		case 1:
			$("#interrogation-messages").drawImage(b1);
			break;
		case 2:
			$("#interrogation-messages").drawImage(b1);
			$("#interrogation-messages").drawImage(b2);
			break;
		case 3:
			$("#interrogation-messages").drawImage(b1);
			$("#interrogation-messages").drawImage(b2);
			$("#interrogation-messages").drawImage(b3);
			break;
		default:
			break;
	}
}

function clearBubbles () {
	$("#interrogation-messages").removeLayer("B1").removeLayer("B2").removeLayer("B3").removeLayer("FB1").removeLayer("FB2").removeLayer("FB3").drawLayers();
	$("#q1").text("");
	$("#q2").text("");
	$("#q3").text("");
}

function question(array) {
	clearBubbles();
    clearMessage();
	displayBubbles(array.length);
	switch (array.length) {
		case 1:
			$("#q1").text(array[0].question);
			break;
		case 2:
			$("#q1").text(array[0].question);
			$("#q2").text(array[1].question);
			break;
		case 3:
			$("#q1").text(array[0].question);
			$("#q2").text(array[1].question);
			$("#q3").text(array[2].question);
			break;
	}
}

function message(message, questions) {
	clearBubbles();
	$("#interrogation-messages").drawImage(bb);
    $("#response").text(message);
}

function clearI() {
    clearBubbles();
    clearMessage();
    progressBar += 20;
    updateProgressBar();
    $("#interrogation").css('z-index', 0);
    $("#interrogation").removeLayers().drawLayers();
    $("#interrogation-messages").css('z-index', 0);
    $("#interrogation-messages").removeLayers().drawLayers();
}

function interrogate(currCase) {
	"use strict";
    clearI();
	currentCase = currCase;
	currentLevel = currentCase;
    var ctxi = document.getElementById('interrogation').getContext("2d");
    ctxi.imageSmoothingEnabled = false;
    ctxi.webkitImageSmoothingEnabled = false;
    ctxi.mozImageSmoothingEnabled = false;
    
    $("#interrogation").css('z-index', 5);
    
    var ctxim = document.getElementById('interrogation-messages').getContext("2d");
    ctxim.imageSmoothingEnabled = false;
    ctxim.webkitImageSmoothingEnabled = false;
    ctxim.mozImageSmoothingEnabled = false;
    
    $("#interrogation-messages").css('z-index', 6);
    
    $("#interrogation").drawImage(bg);
    $("#interrogation").drawImage(lamp);
	$("#interrogation").drawImage(light);
	
	$("#interrogation-messages").drawImage({
        layer: true,
		name: "BArrow",
        fromCenter: true,
        source: "images/WhiteArrow.png",
        x: 50,
		y: 50,
        height: 45,
		width: 45,
        imageSmoothing: false,
        click: function (layer) {
            clearI();
        }
    });
	
	fQuestion(currCase);
}