function Puzzle() {
    var estado=[-1,-2,-3,4];

    
}
var numPiezas = 4;

Puzzle.prototype.isResuelto=function(){
        var resuelto=true;
        for (var i=0;i<this.estado.length;i++){
            if(this.estado.pieza[i] !==i+1){
                resuelto = false;
            }

                return resuelto;
            };
   
};

Puzzle.prototype.onDragStartPiezaSinPoner=function(event){
    event.dataTransfer.setData("text",event.target.id);

};

Puzzle.prototype.onDragStartPiezaPuesta=function(event){
    event.dataTransfer.setData("text",event.target.id);
};

Puzzle.prototype.onDropPiezaPuesta=function(event){
    event.preventDefault();
    var destElement=document.getElementById(event.dataTransfer.getData("text"));
    var originElement=document.getElementById(event.target.id);
    
    var destSrc=destElement.src;
    var originSrc=originElement.src;
    
    destElement.src = originSrc;
    originElement.src = destSrc;
    
    


};
Puzzle.prototype.onDropPiezaSinPoner=function(event){
    event.preventDefault();
    var destElement=document.getElementById(event.dataTransfer.getData("text"));
    var originElement=document.getElementById(event.target.id);
    
    var destSrc=destElement.src;
    var originSrc=originElement.src;
    
    destElement.src = originSrc;
    originElement.src = destSrc;
};

Puzzle.prototype.onDragOverPiezaPuesta=function(event){
    event.preventDefault();


};
Puzzle.prototype.onDragOverPiezaSinPoner=function(event){
    event.preventDefault();
};


         var puzzle = new Puzzle();   


        
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

Puzzle.prototype.getNumHuecoCaja =  function(numPieza){
    if(numPieza<1){
        throw "";
    }
    if(numPieza > this.numPiezas){
        throw "";
    }
    if(numPieza){
        throw "";
    }
};

Puzzle.prototype.getNumHuecoTablero = function(numPieza){
    
} ;
Puzzle.prototype.isLibreHuecoTablero = function(posicion){
    
};

Puzzle.prototype.isAllowColocarPieza = function(numPieza, posicion){
    
};
Puzzle.prototype.isAllowQuitarPieza = function(numPieza){
    
    
};
Puzzle.prototype.isColocadaPieza = function(numPieza, posicion){};
Puzzle.prototype.isQuitadaPieza = function(numPieza){};
Puzzle.prototype.colocarPieza = function(numPieza, posicion){};
Puzzle.prototype.quitarPieza = function(numPieza){};
Puzzle.prototype.reset = function(){};
