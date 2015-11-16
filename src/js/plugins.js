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
            // console.log(img.src);
            document.body.appendChild(img);
            parent.css('backgroundImage', 'url(' + url + ')');
        });
    }
    window.onload = thumbsBg;

    // SCROLL TO ANCHOR
    function scrollIfAnchor(href) {
        href = typeof(href) === 'string' ? href : $(this).attr('href');
        var fromTop = 50;
        if (href.indexOf('#') === 0) {
            var $target = $(href);
            if ($target.length) {
                var time = 1000;
                $('html, body').animate({ scrollTop: $target.offset().top - fromTop }, time);
                if (history && 'pushState' in history) {
                    history.pushState({ }, document.title, window.location.pathname + href);
                    return false;
                }
            }
        }
    }

    $('body').on('click', '.anchor', scrollIfAnchor);


    // Collection menu set active

    $('.choose-collection').click(function() {
        $('.choose-collection').removeClass('active');
        $(this).addClass('active');
    });


    // DEFEND  map iframe

    $('#canvas').addClass('scrolloff');

    $('#overlay').on('mouseup', function() {
        $('#map').addClass('scrolloff');
    });

    $('#overlay').on('mousedown', function() {
        $('#map').removeClass('scrolloff');
    });

    $('#map').mouseleave(function () {
        $('#map').addClass('scrolloff');

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
            // alert('form sent' + ' - ' + formID);
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

//COUNTER
    var tomorrow = moment().endOf('day').valueOf() + 1;
    var now = moment().valueOf();
    var interval = (tomorrow - now) / 1000;
    var clock = $('#top-clock').FlipClock(interval, {
        clockFace: 'HourlyCounter',
        countdown: true,
        language: 'ru'
    });

});



