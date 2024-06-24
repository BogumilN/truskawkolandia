
const images = [
    "./img-strawberry/basket.jpg",
    "./img-strawberry/dessert.jpg",
    "./img-strawberry/hands.jpg",
    "./img-strawberry/hands2.jpg"
];

const radios = document.querySelectorAll('input[type="radio"]');
const imgElement = document.querySelector('.slid-banner img');


let currentIndex = 0;
function changeImage(index) {
    imgElement.src = images[index];
    radios[index].checked = true;
}

function startSlideshow() {
    const interval = setInterval(() => {
        currentIndex = (currentIndex + 1) % images.length;
        changeImage(currentIndex);
    }, 5000); // Change image every 5 seconds
}

radios.forEach((radio, index) => {
    radio.addEventListener('change', () => {

        imgElement.src = images[index];
        currentIndex = index
    })
});

startSlideshow();


















