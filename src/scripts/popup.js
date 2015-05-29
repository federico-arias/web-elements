;(function() {
    if(!document.querySelectorAll('.pu-contenido')) return;
var popup = document.querySelectorAll('.pu-contenido');
var j = 0,
    l = popup.length;

for(var j; j<l;j++) {
    var tip = next(popup[j]);
    tip.style.display = "none";
    popup[j].addEventListener("mouseenter", displayText, false);
    popup[j].addEventListener("mouseleave", hideText, false);
}


function next(elem) {
    do {
        elem = elem.nextSibling;
    } while (elem && elem.nodeType !== 1);
    return elem;        
}

function displayText() {
    var self = this;
    var tip = next(self);
    var tipOffset= this.getBoundingClientRect().top - tip.parentElement.getBoundingClientRect().top + this.offsetWidth/2;
    tip.style.top = tipOffset + 'px';
    tip.style.display = "block";
}

function hideText() {
    var self = this;
    var tip = next(self);
    tip.style.display = "none";
}

})();
