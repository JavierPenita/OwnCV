const navbar = document.querySelector(".navbar");

const navbarOffsetTop = navbar.offsetTop;
const sections = document.querySelectorAll('section');
const navbarLinks = document.querySelectorAll('.navbar-link');

const progress = document.querySelector('.progress-bars-wrapper');
const progressBar = [60,85,90,75,70,95];

window.addEventListener("scroll", () => {
    if(window.pageYOffset >= navbarOffsetTop){
        navbar.classList.add("sticky")
    }else{
        navbar.classList.remove("sticky")
    }

    sections.forEach((section,i) => {
        if(window.pageYOffset >= section.offsetTop - 10){
            navbarLinks.forEach(navbarLinks => {
                navbarLinks.classList.remove("change")
            })
            navbarLinks[i].classList.add("change");
        }
    })
})


if(window.pageYOffset + window.innerHeight >= progress.offsetTop){
    document.querySelectorAll('.progress-percent').forEach((el,i) => {
        el.style.width = '${progressBar[i]}'
    })
}