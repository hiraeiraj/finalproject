//dropdown
document.getElementById('menu-toggle').addEventListener('click', function () {
    document.getElementById('mobile-nav').style.display = 'flex';
});

document.getElementById('close-menu').addEventListener('click', function () {
    document.getElementById('mobile-nav').style.display = 'none';
});

//carousel
let slideIndex = 0;

function moveSlide(step) {
    const slides = document.querySelectorAll('.carousel-track img');
    slideIndex += step;
    if (slideIndex < 0) {
        slideIndex = slides.length - 1;
    } else if (slideIndex >= slides.length) {
        slideIndex = 0;
    }

    const carouselTrack = document.getElementById('home-polaroids');
    const slideWidth = slides[0].clientWidth + 20;
    carouselTrack.style.transform = `translateX(-${slideIndex * slideWidth}px)`;
}


//making dropdown keyboard accessible
document.addEventListener('DOMContentLoaded', function () {
    const dropdown = document.querySelector('.has-dropdown');
    const menu = dropdown.querySelector('.dropdown');
    const menuToggle = dropdown.querySelector('a');
    let menuExpanded = false;

    menuToggle.addEventListener('keydown', function (e) {
        if (e.key === "Enter" || e.key === " ") {
            e.preventDefault();
            menuExpanded = !menuExpanded;
            menu.style.display = menuExpanded ? 'block' : 'none';
            menuToggle.setAttribute('aria-expanded', menuExpanded);
        }
    });

    menu.addEventListener('keydown', function (e) {
        if (e.key === "Escape") {
            menuExpanded = false;
            menu.style.display = 'none';
            menuToggle.setAttribute('aria-expanded', 'false');
        }
    });

    let menuItems = menu.querySelectorAll('a');
    let currentIndex = -1;

    menuItems.forEach((item, index) => {
        item.addEventListener('keydown', function (e) {
            if (e.key === "ArrowDown") {
                currentIndex = (currentIndex + 1) % menuItems.length;
                menuItems[currentIndex].focus();
            }
            if (e.key === "ArrowUp") {
                currentIndex = (currentIndex - 1 + menuItems.length) % menuItems.length;
                menuItems[currentIndex].focus();
            }
        });
    });
});


