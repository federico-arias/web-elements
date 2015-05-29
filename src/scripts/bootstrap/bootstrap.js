//resalta los menúes de la barra de navegación
;(function() {
    if (!document.querySelector('.nav')) return;
    var filename = window.location.pathname.substring(window.location.pathname.lastIndexOf('/')+1),
        menu = document.getElementsByClassName('nav')[0].children,
        l = menu.length,
        i = 0;
    for (i;i<l;i++) {
        var submenu = typeof menu[i].children[1] == 'undefined' ? false : menu[i].children[1].children ,
            sl = submenu ? submenu.length : 0;
        if (menu[i].children[0].getAttribute('href') == filename)
            menu[i].className = menu[i].className + ' active';
        for (j=0;j<sl;j++) {
            if (submenu[j].children[0].getAttribute('href') == filename)
                menu[i].className = menu[i].className + ' active';
        }
    }
})();
