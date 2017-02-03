/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

function onDragStartPieza(event) {
    event.dataTransfer.setData("text", getIdPiezaFromElementPieza(event.target));
};
function onDropHuecoCaja(event) {
    event.preventDefault();
    var destElement = document.getElementById(event.dataTransfer.getData("text"));
    var originElement = document.getElementById(getIdHuecoCajaFromElementCaja(event.target));

    var destSrc = destElement.src;
    var originSrc = originElement.src;

    destElement.src = originSrc;
    originElement.src = destSrc;
}
;

function onDropHuecoTablero(event) {
    event.preventDefault();
    var destElement = document.getElementById(event.dataTransfer.getData("text"));
    var originElement = document.getElementById(getIdHuecoCajaFromElementTablero(event.target));

    var destSrc = destElement.src;
    var originSrc = originElement.src;

    destElement.src = originSrc;
    originElement.src = destSrc;

}
;

function onDragOverHuecoCaja(event) {
    event.preventDefault();
    var originElement = event.dataTransfer.getData("text")
    var destElement=  event.currentTarget;

}
;
function onDragOverHuecoTablero(event) {
    event.preventDefault();
}
;

function getIdPiezaFromElementPieza(elementPieza) {
    return $(elementPieza).attr("idPieza") * 1;
}
;

function getIdHuecoTableroFromElementTablero(elementHuecoTablero) {
    return $(elementHuecoTablero).attr("idHuecoTablero")*1;
}
;

function getIdHuecoCajaFromElementCaja(elementHuecoCaja) {
    return $(elementHuecoCaja).attr("idHuecoCaja")*1;
}
;

function getElementPiezaFromIdPieza(idPieza) {
    var elements= $("[idPieza = '"+idPieza+"']");
    if(elements === isNaN){
        throw "El elemento no existe";
    }if(elements.length>0){
        throw "Esta mal, has introducido mas de un número";
    }
    return elements[0];
    
}
;
function getElementHuecoTableroFromIdHuecoTablero(idHuecoTablero) {
    return document.getElementById("huecoTablero" + idHuecoTablero);
}
;
function getElementHuecoCajaFromIdHuecoCaja(idHuecoCaja) {
    return document.getElementById("huecoCaja" + idHuecoCaja);
}
;