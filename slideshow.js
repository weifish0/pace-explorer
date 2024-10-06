let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
    showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("mySlides");
    let dots = document.getElementsByClassName("dot");
    let combatButton = document.getElementById("combatButton");

    if (n > slides.length) { slideIndex = slides.length }
    if (n < 1) { slideIndex = 1 }

    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" slide_active", "");
    }

    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " slide_active";


    if (slideIndex === slides.length) {
        combatButton.classList.add("show");
    } else {
        combatButton.classList.remove("show");
    }
}