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

$(document).ready(function () {
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

    // Collection menu set active

    $('.choose-collection').click(function() {
        $('.choose-collection').removeClass('active');
        $(this).addClass('active');
    });


    // DEFEND  map iframe

    $('#map_canvas').addClass('scrolloff').mouseleave(function () {
        $('#map_canvas').addClass('scrolloff');
    });

    $('#canvas').on('click', function () {
        $('#map_canvas').removeClass('scrolloff');
    });

    // MAIL FORM

    $('form').submit(function () {
        var formID = $(this).attr('id');
        $.ajax({
            type: 'POST',
            url: 'mail.php',
            data: $(this).serialize()
        }).done(function () {
            $(this).find('input').val('');
            $('#' + formID).trigger('reset');
            //return alert('form sent' + ' - ' + formID);
        });
        var parent = $(this).parents('.modal');
        var modalID = parent.attr('id');

        if ($('#' + modalID).hasClass('in')) {
            $('#' + modalID).modal('hide');
            return false;
        } else {
            return false;
        }
    });



});



