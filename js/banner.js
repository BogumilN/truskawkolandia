let slideIndex = 0;
const slide = document.querySelector('.slide');
// const totalSlides = document.querySelectorAll('.slide').length;



const table = ["./img-strawberry/basket.jpg", "./img-strawberry/dessert.jpg", "./img-strawberry/hands.jpg", "./img-strawberry/hands2.jpg"]

function showSlide() {
    slideIndex++
    if (slideIndex === table.length) {
        slideIndex = 0
    }

    slide.src = table[slideIndex]




}




setInterval(showSlide, 5000);