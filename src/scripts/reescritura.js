;(function () {
    if (!document.querySelector('.reescritura')) return;

    var p = document.getElementsByClassName('reescritura')[0].children,
        l = p.length,
        k = 0;
    for (k;k<l;k++) {
        if (p[k].nodeName == 'P')
            spanify(p[k]);
    }

    function spanify(para){
        var i = 0,
            rText = para.childNodes;
        for (i;i < rText.length;i++) {
            console.log(rText[i].nodeType);
            if (rText[i].nodeType != document.TEXT_NODE) continue;
            rText[i].textContent.split(" ").forEach(function(str) {
                var node = document.createElement('span');
                node.appendChild(document.createTextNode(str + ' '));
                rText[i].parentElement.insertBefore(node, rText[i]);
                i++;
            });
            rText[i].parentElement.removeChild(rText[i]);
         }

        for (j=0;j<rText.length;j++) {
            rText[j].addEventListener('click', resaltar);
        }
    }

    var btnCorregir = document.getElementById('re-corregir');

    btnCorregir.addEventListener('click', corregir);

    function corregir() {
        var spans = document.getElementsByClassName('re-right'),
            i=0,
            l= spans.length,
            btnReescribir = document.getElementById('re-reescribir');

        for(i;i<l;i++) {
            spans[i].style.backgroundColor = 'green' ;
            spans[i].style.color = 'white' ;
        }
        document.getElementById('re-reescribir').removeAttribute('disabled');
        document.getElementsByClassName('re-feedback')[0].textContent = "Las frases o palabras resaltadas en verde son las que deberían ser cambiadas en este texto. Haz clic en el botón Reescribir para ver textos que podrían reemplazarlas.";
        btnReescribir.addEventListener('click', reescribir);
    }

    function reescribir() {
        var spans = document.getElementsByClassName('re-right'),
            i=0,
            l= spans.length,
            del = document.getElementsByClassName('re-del'),
            dl = del.length,
            j=0;
        for(i;i<l;i++) {
            spans[i].textContent = spans[i].getAttribute('data-ans');
        }
        document.getElementById('re-reescribir').setAttribute('disabled', 'disabled');
        for(j;j<dl;j++){
            del[j].style.display='none';
        }
        this.removeEventListener('click', reescribir);

    }

    function resaltar() {
        if (this.class != 're-resaltado')
            this.style.backgroundColor = 'violet';
    }

})();

    
