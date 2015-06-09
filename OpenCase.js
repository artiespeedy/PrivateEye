var omcl = {
    type: "image", name: "OMCL",
    source: "images/MidCaseOpen.png",
    fromCenter: false,
    x: 0, y: 0,
    width: 1000, height: 600,
    imageSmoothing: false,
	intangible: true
}

var olcl = {
    type: "image", name: "OLCL",
    source: "images/LeftCaseOpen.png",
    fromCenter: false,
    x: 0, y: 0,
    width: 1000, height: 600,
    imageSmoothing: false,
	intangible: true
}

var orcl = {
    type: "image", name: "ORCL",
    source: "images/RightCaseOpen.png",
    fromCenter: false,
    x: 0, y: 0,
    width: 1000, height: 600,
    imageSmoothing: false,
	intangible: true
}

function openCase(number) {
    $("#cases").css('z-index', 2);
    var ctx = document.getElementById("cases").getContext("2d");
    ctx.imageSmoothingEnabled = false;
    ctx.webkitImageSmoothingEnabled = false;
    ctx.mozImageSmoothingEnabled = false;
    
    switch(number) {
        case 1:
            $("#cases").addLayer(olcl).drawLayers();
            break;
        case 2:
            $("#cases").addLayer(omcl).drawLayers();
            break;
        case 3:
            $("#cases").addLayer(orcl).drawLayers();
            break;
        default:
            console.log("Err");
    }
    
    papers(number);
}

function clearOCases() {
    $("#cases").removeLayers();
    $("#cases").css('z-index', 0);
}