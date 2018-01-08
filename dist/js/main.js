/*
$(document).ready(function () {
    var devicePixelRatio = window.devicePixelRatio;
    if ( 'devicePixelRatio' in window && devicePixelRatio >= 2) {
        var replace = '';
        if( devicePixelRatio === 2 ) {
            replace = '@2x.$1';
        } else {
            replace = '@3x.$1';
        }

        var img_to_replace = jQuery( 'img.retina' ).get();

        for (var i = 0,l = img_to_replace.length; i < l; i++) {
            var src = img_to_replace[i].src;
            src = src.replace(/\.(png|jpg|gif)+$/i, replace);
            img_to_replace[i].src = src;
        }
    }

    new WOW().init();
});*/
