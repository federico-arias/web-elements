;(function() {
    if(!document.querySelector('.tooltip')) return;
    var i=0,
        ttips = document.getElementsByClassName('tooltip'),
        l=ttips.length;
    console.log(ttips.length + ttips[0]);
    for(i;i<l;i++) {
        //wrap it in sup with text i
        var sup = document.createTextNode('[' + i + ']'),
            ref = document.createElement('span');

        ref.className = 'reference';
        ref.appendChild(sup);
        ttips[i].parentElement.insertBefore(ref, ttips[i]);
        ref.appendChild(ttips[i]);

        ttips[i].parentElement.addEventListener('click', toggleTT);
    }

    function toggleTT() {
        //if visibility:visible, hide
        var tT = this.lastChild,
            l = tT.offsetWidth/2 - 5,
            t = tT.offsetHeight + tT.parentElement.offsetHeight;
                console.log(tT);
        
        tT.style.top = '-' + t + 'px';
        tT.style.left = '-' + l + 'px';
        tT.style.visibility = tT.style.visibility == 'visible' ? 'hidden' : 'visible';
    }

})();

