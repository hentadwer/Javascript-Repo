// listen event is for Dom ejecute the event in document and launch in javaScript 
// the event execute functions and messages and can modifi the element.
// this object name H1 it be weel modifed by the mouse cursor.
var title = document.getElementById("myTitle");
title.onclick = function() {
    title.innerHTML = "Is this a New Title";
}