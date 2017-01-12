function Puzzle(numeroPiezas) {
    var estado = [-1, -2, -3, -4];
    this.numPiezas = numeroPiezas;


}
var numPiezas;

Puzzle.prototype.isResuelto = function () {
    var resuelto = true;
    for (var i = 0; i < this.estado.length; i++) {
        if (this.estado.pieza[i] !== i + 1) {
            resuelto = false;
        }

        return resuelto;
    }
    ;

};

Puzzle.prototype.onDragStartPiezaSinPoner = function (event) {
    event.dataTransfer.setData("text", event.target.id);

};

Puzzle.prototype.onDragStartPiezaPuesta = function (event) {
    event.dataTransfer.setData("text", event.target.id);
};

Puzzle.prototype.onDropPiezaPuesta = function (event) {
    event.preventDefault();
    var destElement = document.getElementById(event.dataTransfer.getData("text"));
    var originElement = document.getElementById(event.target.id);

    var destSrc = destElement.src;
    var originSrc = originElement.src;

    destElement.src = originSrc;
    originElement.src = destSrc;




};
Puzzle.prototype.onDropPiezaSinPoner = function (event) {
    event.preventDefault();
    var destElement = document.getElementById(event.dataTransfer.getData("text"));
    var originElement = document.getElementById(event.target.id);

    var destSrc = destElement.src;
    var originSrc = originElement.src;

    destElement.src = originSrc;
    originElement.src = destSrc;
};

Puzzle.prototype.onDragOverPiezaPuesta = function (event) {
    event.preventDefault();


};
Puzzle.prototype.onDragOverPiezaSinPoner = function (event) {
    event.preventDefault();
};


var puzzle = new Puzzle(4);



/*
 * getNumHuecoCaja = function(numPieza) : dónde está la pieza en la caja
 * getNumHuecoTablero = function(numPieza) : 
 * isLibreHuecoTablero = function(posicion) : devuelve true o false si la posición esta libre, se puede o no
 * isAllowColocarPieza = function (numPieza, posicion) : T/F si se puede poner o no, ej: puede haber ya una pieza
 * isAllowQuitarPieza = function(numPieza) : si ya está quitada (en la caja) no puedes quitarla
 * isColocadaPieza= function (numPieza, posicion): la pieza está puesta
 * isQuitadaPieza= function (numPieza): la pieza está quitada
 * colocarPieza: 
 * quitarPieza: 
 * reset = function();
 * isResuelto = devuelve true o false
 * 
 */

Puzzle.prototype.getNumPosicionPiezaEnCaja = function (numPieza) {
    if (numPieza > 0 ){
        throw "No esta en la caja";
    }
    else{
       return this.estado[numPieza-1];
    }
};
Puzzle.prototype.getNumPosicionPiezaEnTablero = function (numPieza) {
   if (numPieza < 0){
        throw "No esta en el tablero";
    }
    else{
       return this.estado[numPieza-1];
    }
};



Puzzle.prototype.getNumPiezas = function () {
    return this.numPiezas;
};

Puzzle.prototype.isLibreHuecoTablero = function (posicion) {
    var valido = true;
    for (var i = 1; i <= this.estado.length; i++) {
        if (this.estado[i] === posicion) {
            valido = false;
        }
        return valido;
    }
};

Puzzle.prototype.isPermitidoColocarPieza = function (numPieza, posicion) {
    if (Puzzle.prototype.isColocadaPieza (numPieza, posicion) === true ){
        throw  "No se puede volver a colocar";
    }else{Puzzle.prototype.isLibreHuecoTablero(posicion);
    
    }
    
};

Puzzle.prototype.isPermitidoQuitarPieza = function (numPieza) {
    var valido = false;
    if (this.estado[numPieza-1] > 0) {
        valido = true;
    }
    return valido;
};

Puzzle.prototype.isColocadaPieza = function (numPieza, posicion) {
    var valido = false;
    if (this.estado[numPieza-1] === posicion) {
        valido = true;
    }
    return valido;
};

Puzzle.prototype.isQuitadaPieza = function (numPieza) {
    var valido = false;
    if (this.estado[numPieza-1] < 0) {
        valido = true;
    }
    return valido;
};

Puzzle.prototype.colocarPieza = function (numPieza, posicion) {
    if (Puzzle.prototype.isPermitidoColocarPieza (numPieza, posicion) == true){
    this.estado[numPieza-1] = posicion;
    }else{
        throw "No se puede colocar la pieza";
    }
};

Puzzle.prototype.quitarPieza = function (numPieza) {
    if (Puzzle.prototype.isPermitidoQuitarPieza== true){

    for (var i = 1; i <= this.numPiezas; i++) {
        if (numPieza === i) {
            this.estado[numPieza-1] = i*-1;
        }
    }
    }else{
        throw "No se puede quitar la pieza";
    }
};
Puzzle.prototype.reset = function () {
    var reinicio = -1;
    for (var i = 1; i <= this.estado.length; i++) {
        this.estado[reinicio];
        reinicio--;
    }
};
