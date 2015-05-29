(function () {
    if (!document.querySelector('.cambiar')) return;
    var cambiar = document.querySelectorAll('.cambiar');

    var i = 0,
    l = cambiar.length;

    for(i; i<l;i++) {
    cambiar[i].addEventListener("click", swapText, false);
    }

    function swapText() {
        var cambio = this.getAttribute('data-contenido'),
            cambiar = this.innerHTML;
        this.setAttribute('data-contenido', cambiar); 
        this.innerHTML = cambio;
    }

})();
