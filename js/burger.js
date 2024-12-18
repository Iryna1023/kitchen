document.querySelector(".menu__icon").addEventListener("click", function(event) {
    event.preventDefault();
    const header = document.querySelector(".header__header");
    header.classList.toggle("menu-open");
});

document.querySelectorAll('.menu__link').forEach(link => {
    link.addEventListener('click', function() {
        const header = document.querySelector(".header__header");
        header.classList.remove("menu-open");
    });
});

window.addEventListener("resize", function() {
    const header = document.querySelector(".header__header");
    if (window.innerWidth > 768) {
        header.classList.remove("menu-open");
    }
});
