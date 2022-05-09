let showToast = false;
let livetoast = document.getElementById('livetoast');

$(window).scroll(function () {
    if ($(window).scrollTop() + $(window).height() == $(document).height() && !showToast) {
        var toast = new bootstrap.Toast(livetoast);
        showToast = true;
        toast.show();
    }
});
