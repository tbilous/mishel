// Avoid `console` errors in browsers that lack a console.
(function() {
    var method;
    var noop = function () {};
    var methods = [
        'assert', 'clear', 'count', 'debug', 'dir', 'dirxml', 'error',
        'exception', 'group', 'groupCollapsed', 'groupEnd', 'info', 'log',
        'markTimeline', 'profile', 'profileEnd', 'table', 'time', 'timeEnd',
        'timeline', 'timelineEnd', 'timeStamp', 'trace', 'warn'
    ];
    var length = methods.length;
    var console = (window.console = window.console || {});

    while (length--) {
        method = methods[length];

        // Only stub undefined methods.
        if (!console[method]) {
            console[method] = noop;
        }
    }
}());

// Place any jQuery/helper plugins in here.
/*function thumbsBg() {
    $('.photo-link').each(function () {
        var imgID = this.href;
        var parent = $(this).parents('.item-photo');
        parent.css('backgroundImage', 'url(' + imgID + ')');
    });
}*/
function thumbsBg() {
    $('.photo-link').each(function () {
        var url = $(this).attr('href');
        var parent = $(this).closest('.item-photo');
        var img = new Image();
        img.src = url;
        img.style.display = 'none';
        console.log(img.src);
        document.body.appendChild(img);
        parent.css('backgroundImage', 'url(' + url + ')');
    });
}
window.onload = thumbsBg;


