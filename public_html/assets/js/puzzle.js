function Puzzle() {
    var estado=[-1,-2,-3,4];

    
}

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


        
