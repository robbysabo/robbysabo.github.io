var showToast = false;
var livetoast = document.getElementById('livetoast');

$(document).ready(function () {
    // GIF of the Outrun background fullscreen
    $('.hero').height($(window).height());
    // Buzzwords on front page, lettering.js
    $('.buzzwords').lettering();
});

$(window).scroll(function () {
    if ($(window).scrollTop() + $(window).height() == $(document).height() && !showToast) {
        var toast = new bootstrap.Toast(livetoast);
        showToast = true;
        toast.show();
    }
});
