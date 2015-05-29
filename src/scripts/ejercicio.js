/****Dropdown class ******/
function DropDown(el) {
    this.dd = $(el);
    this.ddv = el;
    this.placeholder = this.dd.children('span');
    this.opts = this.dd.find('ul.dropdown > li');
    this.val = '';
    this.index = -1;
    this.initEvents();
    this.z = 1;
}
var gDropdowns = [];

DropDown.prototype = {
    initEvents : function() {
        var obj = this;
        obj.dd.on('click', function(event){
            $(obj.dd).toggleClass('active');
            resetDD();
            obj.ddv.style.zIndex = 300;
            hideDD();
            return false;
        });

        gDropdowns.push(obj);

        obj.opts.on('click',function(){
            var opt = $(this);
            obj.val = opt.text();
            obj.index = opt.index();
            obj.placeholder.text(obj.val);
            $(obj.dd).addClass('hide-arrow');
            var str = obj.ddv.nextElementSibling.innerHTML;
            obj.ddv.style.zIndex = 200;
            str = str.trim();
            console.log('click made');

            if (opt.text() == ".") {
               obj.ddv.nextElementSibling.innerHTML = ' ' + str.charAt(0).toUpperCase() + str.substr(1);
            } else {
               obj.ddv.nextElementSibling.innerHTML = str.substr(0, 1).toLowerCase() + str.substr(1);
            }
            showDD();

        });
    },
    getValue : function() {
        return this.val;
    },
    getIndex : function() {
        return this.index;
    },
    build : function() {

    }
}

var assess = function () {
    var count = 0,
        grade = 0,
        answers = getAnswers();

    Array.prototype.forEach.call(document.getElementsByClassName('wrapper-dropdown-1'), function(elem, index) {
       //var right_answer = code[elem.getAttribute('data-ans')];
       var right_answer = answers[index];
       var user_answer = elem.childNodes[0].innerHTML;
       //is answer = right
       elem.classList.remove('bad-answer');

       if (user_answer == right_answer) {
           grade += 1;
       }
       
       if (user_answer != right_answer) {
           elem.className = elem.className + " bad-answer";
       }
       count += 1;
    }); 

    var fb = document.getElementById('feedback');
    fb_string = grade < (0.8 * count) ? ". Vuelve a intentarlo" : ". Felicitaciones";
    fb_class = grade < (0.8 * count) ? "alert-danger" : "alert-success";
    fb.innerHTML = "Tuviste " + grade + " respuestas correctas de " + count + fb_string;
    fb.style.display = 'block';
    fb.className = "alert " + fb_class;
    return grade/count;
}

var getAnswers = function() {
    var answersByIndex = [];
    var dds = document.getElementsByClassName('wrapper-dropdown-1');

    Array.prototype.forEach.call(dds, function(elem, index) {
        answersByIndex[index] = elem.getAttribute('data-ans');
    });
    return answersByIndex;
}

var getOptions = function() {
    var options = [];
    var dds = document.getElementsByClassName('wrapper-dropdown-1');

    Array.prototype.forEach.call(dds, function(elem, index) {
        if (options.indexOf(elem.getAttribute('data-ans')) == -1) {
            options.push(elem.getAttribute('data-ans'));
        }
    });
    return options;
}

;(function() {
    //foreach class dd
    if (!document.querySelector('.wrapper-dropdown-1')) return;
    var dds = document.getElementsByClassName('wrapper-dropdown-1');
    var options = getOptions();

    Array.prototype.forEach.call(dds, function(elem, index) {
        var zI = 100 - index;
        var title = document.createElement("span");
        var dropdown = document.createElement("ul");
        dropdown.className = "dropdown";
        for (i=0;i<options.length;i++) {
            var li = document.createElement("li");
            var a = document.createElement("a");
            var txt = document.createTextNode(options[i]);
            a.appendChild(txt);
            li.appendChild(a);
            dropdown.appendChild(li);
        }
        elem.appendChild(title);
        elem.appendChild(dropdown);
        elem.style.zIndex = zI;
        elem.style.position = 'relative';

        var dd = new DropDown(elem);
    }); //end forEach
    var disableDD = function() {
        $('.wrapper-dropdown-1').removeClass('active');
    };

    buttonAssess = document.getElementById('assess');
    document.addEventListener("click", disableDD);
    buttonAssess.addEventListener("click", assess); 
    
})();

(function() {
    var i=0,
        dd=document.querySelectorAll('.wrapper-dropdown-1'),
        l=dd.length;
        //wrap next sibling into a span to select it
    for (i;i<l;i++) {
        var textNode = dd[i].nextSibling;
        var span = document.createElement('span');
        if (textNode && textNode.nodeType == 3) {
            span.appendChild(textNode);
            dd[i].parentElement.insertBefore(span, dd[i].nextElementSibling);
        }
    }
})();

var showDD = function () {
    var i=0,
        dd=document.querySelectorAll('.wrapper-dropdown-1'),
        l=dd.length;
        //wrap next sibling into a span to select it
    for (i;i<l;i++) {
        //dd[i].setAttribute('style', 'background:green');
    }
}

var hideDD = function () {
    var i=0,
        dd=document.querySelectorAll('.wrapper-dropdown-1'),
        l=dd.length;
        //wrap next sibling into a span to select it
    for (i;i<l;i++) {
        //dd[i].setAttribute('style', 'background:#97CB9D');
    }
}

var resetDD = function() {
    gDropdowns.forEach(function(dd) {
        dd.ddv.style.zIndex = 200;
    });
}
