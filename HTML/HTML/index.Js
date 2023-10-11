const headSlide = () => {
    const burger = document.querySelector(".burger");
    const nav = document.querySelector(".nav-links");

    const navLinks = document.querySelectorAll('.nav-links li');

burger.addEventListener('click', () => {
//toggle nav
    nav.classList.toggle('nav-active');

//link animation
    navLinks.forEach((link, index) => {
        if (link.style.animation) {
            link.style.animation = '';
        }else {
        link.style.animation = `navLinkFade 0.5s ease forwards  ${index / 5 + 0.5}s`;
        console.log(index/5 + 1);
        }
    });
    burger.classList.toggle('toggle');

});
};

headSlide();



let ScrollContainer = document.querySelector(".gallery");
let LBtn = document.getElementById("LBtn");
let RBtn = document.getElementById("RBtn");

ScrollContainer.addEventListener("wheel", (evt) => {
    evt.preventDefault();
    ScrollContainer.scrollLeft + evt.deltaY;
    ScrollContainer.style.scrollBehavior = "auto";
});
RBtn.addEventListener("click", ()=>{
    ScrollContainer.style.scrollBehavior = "smooth";
ScrollContainer.scrollLeft += 1200;
});
LBtn.addEventListener("click", ()=>{
    ScrollContainer.style.scrollBehavior = "smooth";
    ScrollContainer.scrollLeft -= 1200;
    });

let ScrollContainer1 = document.querySelector(".gallery1");
let LBtn1 = document.getElementById("LBtn1");
let RBtn1 = document.getElementById("RBtn1");

ScrollContainer1.addEventListener("wheel", (evt) => {
    evt.preventDefault();
    ScrollContainer1.scrollLeft + evt.deltaY;
    ScrollContainer1.style.scrollBehavior = "auto";
});
RBtn1.addEventListener("click", () => {
    ScrollContainer1.style.scrollBehavior = "smooth";
ScrollContainer1.scrollLeft += 1200;
});
LBtn1.addEventListener("click", ()=> {
    ScrollContainer1.style.scrollBehavior = "smooth";
    ScrollContainer1.scrollLeft -= 1200;
    });
        
   