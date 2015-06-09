function background() {
    var ctxbgd = document.getElementById("background").getContext("2d");
    ctxbgd.imageSmoothingEnabled = false;
    ctxbgd.webkitImageSmoothingEnabled = false;
    ctxbgd.mozImageSmoothingEnabled = false;
    
    function bDraw(image) {
        $("#background").drawImage({
        layer: true, name: image,
        source: image,
        fromCenter: false,
        x: 0, y: 0,
        width: 1000, height: 600,
        imageSmoothing: false,
        });
    }
    
    bDraw("images/FrontDesk.png");
    
}