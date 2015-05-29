;(function() {
    if(!document.querySelectorAll('.alternativa')) return;
    var i = 0,
        alt = document.querySelectorAll('.alternativa > span'),
        l = alt.length;
    for (i;i<l;i++) {
        alt[i].addEventListener('click', onSelect, false);
    }

    function onSelect () {
        var a = this.parentElement.children,
            sentence = this.parentElement.parentElement.childNodes,
            l = a.length,
            ol = sentence.length,
            f = document.createElement('span'),
            i = 0,
            fb= [' Incorrecto.', ' Correcto.'],
            fbT;
        for (i;i<l;i++) {
            a[i].classList.remove('al-selected');
        }
        this.classList.add('al-selected');
        if (this.classList.contains('r')) {
            fbT = document.createTextNode(fb[1]);
            f.classList.add('al-right');
        } else {
            fbT = document.createTextNode(fb[0]);
            f.classList.add('al-wrong');
        }
        if (ol > 3) 
            this.parentElement.parentElement.removeChild(sentence[sentence.length - 1]);
            f.appendChild(fbT);
            this.parentElement.parentElement.insertBefore(f, sentence[sentence.length]);
    }

    //results
    function assess() {
        var i = 0,
            points = 0,
            fb = document.getElementById('al-feedback');
            fbText = document.createTextNode('Obtuviste' + points + ' ' + 'puntos');
            alt = document.querySelectorAll('.alternativa'),
            l = alt.length;

        for (i;i<l;i++) {
            if (!alt[i].querySelector('.al-selected')) continue;
            userSelection = alt[i].querySelector('.al-selected');
            if (userSelection.classList.contains('r'))
             points++;
        }
        fb.innerHTML = "Obtuviste " + points + " puntos"; 
    }
})();
