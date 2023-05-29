// батьківський клас ------------------------------------------
function CoffeMake() { 
    console.log('instance created');
};

CoffeMake.prototype.on = function () {
    console.log('switch on');
}
CoffeMake.prototype.off = function () {
    console.log('switch off');
}


//    дочірній клас 1 ------------------------------------------ 
function CoffeDrop() {
}



CoffeDrop.prototype = Object.create(CoffeMake.prototype);
CoffeDrop.prototype.constuctor = CoffeDrop; 

CoffeDrop.prototype.drop = function () {
    console.log("drop coffe maked");
};
//    дочірній клас 2 ------------------------------------------------
function CoffeCornish() {
}


CoffeCornish.prototype = Object.create(CoffeMake.prototype);
CoffeCornish.prototype.constuctor = CoffeCornish; 

CoffeCornish.prototype.drop = function () {
    console.log("Cornish coffe maked");
};
//    дочірній клас 3 ------------------------------------------------
function CoffeCMachine() {
}
CoffeCMachine.prototype = Object.create(CoffeMake.prototype);
CoffeCMachine.prototype.constuctor = CoffeCMachine; 

CoffeCMachine.prototype.drop = function () {
    console.log("Machine coffe maked");
};







