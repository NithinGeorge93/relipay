var swiper = new Swiper(".check-btn-slide ", {
    slidesPerView: "auto",
    noSwiping: false,
});

$('.swiper-slide select').on('mousedown touchstart MSPointerDown', function (e) {
    e.stopPropagation();
});

$(".swiper .dropdown a").click(function () {
    $("embed").removeClass("filter");
    $(this).closest(".swiper-slide").find("embed").addClass("filter");

});

