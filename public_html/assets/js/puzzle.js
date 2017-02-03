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
 * getNumHuecoCaja = function(idPieza) : dónde está la pieza en la caja
 * getNumHuecoTablero = function(idPieza) : 
 * isLibreHuecoTablero = function(posicion) : devuelve true o false si la posición esta libre, se puede o no
 * isAllowColocarPieza = function (idPieza, posicion) : T/F si se puede poner o no, ej: puede haber ya una pieza
 * isAllowQuitarPieza = function(idPieza) : si ya está quitada (en la caja) no puedes quitarla
 * isColocadaPieza= function (idPieza, posicion): la pieza está puesta
 * isQuitadaPieza= function (idPieza): la pieza está quitada
 * colocarPieza: 
 * quitarPieza: 
 * reset = function();
 * isResuelto = devuelve true o false
 * 
 */

Puzzle.prototype.getNumPosicionPiezaEnCaja = function (idPieza) {
    if (idPieza > 0 ){
        throw "No esta en la caja";
    }
    else{
       return this.estado[idPieza-1];
    }
};
Puzzle.prototype.getNumPosicionPiezaEnTablero = function (idPieza) {
   if (idPieza < 0){
        throw "No esta en el tablero";
    }
    else{
       return this.estado[idPieza-1];
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

Puzzle.prototype.isPermitidoColocarPieza = function (idPieza, posicion) {
    if (Puzzle.prototype.isColocadaPieza (idPieza, posicion) === true ){
        throw  "No se puede volver a colocar";
    }else{Puzzle.prototype.isLibreHuecoTablero(posicion);
    
    }
    
};

Puzzle.prototype.isPermitidoQuitarPieza = function (idPieza) {
    var valido = false;
    if (this.estado[idPieza-1] > 0) {
        valido = true;
    }
    return valido;
};

Puzzle.prototype.isColocadaPieza = function (idPieza, posicion) {
    var valido = false;
    if (this.estado[idPieza-1] === posicion) {
        valido = true;
    }
    return valido;
};

Puzzle.prototype.isQuitadaPieza = function (idPieza) {
    var valido = false;
    if (this.estado[idPieza-1] < 0) {
        valido = true;
    }
    return valido;
};

Puzzle.prototype.colocarPieza = function (idPieza, posicion) {
    if (Puzzle.prototype.isPermitidoColocarPieza (idPieza, posicion) == true){
    this.estado[idPieza-1] = posicion;
    }else{
        throw "No se puede colocar la pieza";
    }
};

Puzzle.prototype.quitarPieza = function (idPieza) {
    if (Puzzle.prototype.isPermitidoQuitarPieza== true){

    for (var i = 1; i <= this.numPiezas; i++) {
        if (idPieza === i) {
            this.estado[idPieza-1] = i*-1;
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


