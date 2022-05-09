let showToast = false;
let liveToast = document.getElementById('livetoast');

$(window).scroll(function () {
    if ($(window).scrollTop() + $(window).height() == $(document).height() && !showToast) {
        var toast = new bootstrap.Toast(liveToast);
        showToast = true;
        toast.show();
    }
});
