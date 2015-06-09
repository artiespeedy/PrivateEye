var progressBar = 0;
var rcl = {
    type: "image", name: "CLR",
    source: "images/CaseLightRight.png",
    fromCenter: false,
    x: 0, y: 0,
    width: 1000, height: 600,
    imageSmoothing: false,
    intangible: true
}
var lcl = {
    type: "image", name: "CLL",
    source: "images/CaseLightLeft.png",
    fromCenter: false,
    x: 0, y: 0,
    width: 1000, height: 600,
    imageSmoothing: false,
    intangible: true
}
var mcl = {
    type: "image", name: "CLM",
    source: "images/CaseLightMid.png",
    fromCenter: false,
    x: 0, y: 0,
    width: 1000, height: 600,
    imageSmoothing: false,
    intangible: true
}

function println(s) {
    console.log(s);
}

function hideAllCases() {
    $("#background").removeLayer("CLR");
    $("#background").removeLayer("CLL");
    $("#background").removeLayer("CLM");
    $("#background").removeLayer("C3");
    $("#background").removeLayer("C1");
    $("#background").removeLayer("C2");
}

function mainMenu() {
    hideAllCases();
    
    if (!currentCases[2].isDone) {
        $("#background").drawImage({
            layer: true, name: "C3",
            source: "images/RightCase.png",
            fromCenter: false,
            x: 640, y: 230,
            width: 330, height: 330,
            imageSmoothing: false,
            mouseover: function(layer){
                $("#background").addLayer(rcl).drawLayers();
            },
            mouseout: function(layer) {
                $("#background").removeLayer("CLR");
            },
            click: function(layer) {
                hideAllCases()
                openCase(3);
            }
        });
    }
    if (!currentCases[0].isDone) {
        $("#background").drawImage({
            layer: true, name: "C1",
            source: "images/LeftCase.png",
            fromCenter: false,
            x: 20, y: 240,
            width: 360, height: 330,
            imageSmoothing: false,
            mouseover: function(layer){
                $("#background").addLayer(lcl).drawLayers();
            },
            mouseout: function(layer) {
                $("#background").removeLayer("CLL");
            },
            click: function(layer) {
                hideAllCases()
                openCase(1);
            }
        });
    }
    
    if (!currentCases[1].isDone) {
        $("#background").drawImage({
            layer: true, name: "C2",
            source: "images/MidCase.png",
            fromCenter: false,
            x: 350, y: 220,
            width: 340, height: 350,
            imageSmoothing: false,
            mouseover: function(layer){
                $("#background").addLayer(mcl).drawLayers();
            },
            mouseout: function(layer) {
                $("#background").removeLayer("CLM");
            },
            click: function(layer) {
                hideAllCases()
                openCase(2);
            }
        });
    }
}

var currentCases = [new Case(), new Case(), new Case()];

function numberOfRemainingCases() {
    var count = 0;
    for (var i in currentCases) {
        if (!i.isDone) {
            count++;
        }
    }
}

var startingPaper = {
    layer: true,
    type: "image", name: "Paper",
    source: "images/Paper.png",
    fromCenter: false,
    x: 0, y: 0,
    width: 1000, height: 600,
    imageSmoothing: false,
    click: function (layer) {
        $("#background").removeLayer("Paper");
        $("#background").removeLayer("Text");
    }
}

var startingPaperText = {
    layer: true,
    name: "Text",
    type: "text",
    fillStyle: '#000',
    imageSmoothing: false,
    fontSize: '20pt',
    fontFamily: 'Times New Roman',
    x: 300, y: 70, 
    text: "Welcome to your job. You are a private investigator for crimes in which we have suspects but no evidence. Instead, you are to rely solely on figuring out who was the most likely person to commit the crime. \n \n Keep in mind that you can't ask every question you want to. When you ask one question, you close your path off to the other ones.",
    fromCenter: false,
    maxWidth: 450
}

function drawStartingPaper () {
    $("#background").addLayer(startingPaper);
    $("#background").addLayer(startingPaperText)
    $("#background").drawLayers();
}

$(function() {
    $("#agemeter").width(1000);
    background();
    mainMenu();
    drawStartingPaper();
});

function updateProgressBar() {
    $("#agemeter").progressbar({
        value: progressBar
    });
}