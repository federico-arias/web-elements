(function () {
    if (!document.querySelector('.checklist')) return;
    var lItems = document.querySelector(".checklist").childNodes[1].childNodes;

    var l = lItems.length,
        i = 0;

    for (i;i<l;i++) {
        if (lItems[i].nodeName != 'LI') 
            continue;
        var span = document.createElement('span');
        span.className="checkmark";
        lItems[i].insertBefore(span, lItems[i].childNodes[0]);
    }
})();
