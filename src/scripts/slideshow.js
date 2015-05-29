(function() {
    if (!document.querySelector('.slideshow img')) return;
	var images = document.querySelectorAll('.slideshow img');
    var progress = document.getElementsByClassName('ss-progress-indicator');
	var position = 0;
    var prev = document.getElementById('prev');
    var next = document.getElementById('next');

    images[position].style.visibility = 'visible';
    images[position].style.opacity = '1';

			
	var moveSlide = function(next) {

        next = typeof next !== 'undefined' ? next : true;

		position = next ? (position + 1) : (position - 1);

		if (position == images.length) position -= 1;
		if (position == -1 ) position = 0;

        var p = ((position + 1)/images.length) * 100;
        progress[0].style.width = p  + "%";

		for(var i=0; i < images.length; i++) {
			if (i == position) {
				images[i].style.visibility = 'visible';
				images[i].style.opacity = 1;
			} else {
				images[i].style.visibility = 'hidden';
				images[i].style.opacity = 0;
			}
		}
	};

    var previousSlide = function() {moveSlide(false);};
    prev.addEventListener('click', previousSlide);
    next.addEventListener('click', moveSlide);
})();
