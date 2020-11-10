
$(document).ready(function(){
    $('.single-item').slick({
        dots: false,
        autoplay: true,
        arrows: true,
        prevArrow:"<button type='button' class='slick-prev pull-left'><i class='angle-left' src='../icons/angle-left.svg' aria-hidden='true'></i></button>",
        nextArrow:"<button type='button' class='slick-next pull-right'><i class='angle-right' src='../icons/angle-right.svg.svg' aria-hidden='true'></i></button>",
    });
});

const navSlide = () => {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-links');
    const navLinks = document.querySelectorAll('.nav-links li')
    //Toggle nav
    burger.addEventListener('click', () => {
        nav.classList.toggle('nav-active');

        //Animate Links
        navLinks.forEach((link, index) => {
            if (link.style.animation) {
                link.style.animation = '';
            } else {
                link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.3}s`;
            }
        });
        //Burger animation
        burger.classList.toggle('toggle');
        
    });

}

navSlide();




