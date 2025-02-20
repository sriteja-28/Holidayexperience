document.addEventListener('DOMContentLoaded', function () {
    var myCarousel = document.querySelector('#carouselExampleSlidesOnly');
    if (myCarousel) {
        new bootstrap.Carousel(myCarousel, {
            interval: 2000
        });
    }
    document.getElementById("currentYear").textContent = new Date().getFullYear();
});
