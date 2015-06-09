var casesGenerated = 0;

function randomRange(high, low) {
    "use strict";
    var dist = Math.random() * (high - low);
    return low + dist;
}

//includes both high and low
function intRandomRange(high, low) {
    "use strict";
    var dist = Math.random() * (high - low);
    return Math.round(low + dist);
}

function Case() {
    "use strict";
    this.isDone = false;
    casesGenerated++;
    this.cases = [0, 0, 0, 0, 0, 0];
    this.suspectIndex = intRandomRange(5, 0);
    this.usedNumbers = [];
    this.interviewedPeople = [false, false, false, false, false, false];
    var crimeIndex = intRandomRange(criminals.length - 1, 0);
    this.cases[this.suspectIndex] = criminals.splice(crimeIndex, 1);
    for (var i = (this.suspectIndex + 1); i < 5; i++) {
        /*var witnessIndex = 0;
        do {
            
        } while (Array.asList(this.usedNumbers).contains(witnessIndex));*/
        var witnessIndex = intRandomRange(witnessData.length - 1, 0);
        this.cases[i] = witnessData.splice(witnessIndex, 1); 
        if (this.cases[i] instanceof Array) {
            this.cases[i] = this.cases[i][0];
        }
    }
    
    for (var i = 0; i < this.suspectIndex; i++) {
        /*var witnessIndex = 0;
        do {
            witnessIndex = intRandomRange(witnesses.length - 1, 0);
        } while (Array.asList(this.usedNumbers).contains(witnessIndex));
        cases[i] = witnesses[witnessIndex];*/
        var witnessIndex = intRandomRange(witnessData.length - 1, 0);
        this.cases[i] = witnessData.splice(witnessIndex, 1); 
    }
}