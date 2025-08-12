function myMenuFunction() {
    var menuBtn = document.getElementById("myNavMenu");
    menuBtn.classList.toggle("responsive");
}

const carousel = document.querySelector(".carousel");

let isDragStart = false,
    startX,
    scrollLeft;

// Mouse events
carousel.addEventListener("mousedown", (e) => {
    isDragStart = true;
    startX = e.pageX - carousel.offsetLeft;
    scrollLeft = carousel.scrollLeft;
});
carousel.addEventListener("mouseleave", () => {
    isDragStart = false;
});
carousel.addEventListener("mouseup", () => {
    isDragStart = false;
});
carousel.addEventListener("mousemove", (e) => {
    if (!isDragStart) return;
    e.preventDefault();
    const x = e.pageX - carousel.offsetLeft;
    const walk = x - startX;
    carousel.scrollLeft = scrollLeft - walk;
});

// Touch events
carousel.addEventListener("touchstart", (e) => {
    isDragStart = true;
    startX = e.touches[0].pageX - carousel.offsetLeft;
    scrollLeft = carousel.scrollLeft;
});
carousel.addEventListener("touchend", () => {
    isDragStart = false;
});
carousel.addEventListener("touchmove", (e) => {
    if (!isDragStart) return;
    const x = e.touches[0].pageX - carousel.offsetLeft;
    const walk = x - startX;
    carousel.scrollLeft = scrollLeft - walk;
});

// ...existing code...

const leftBtn = document.getElementById("carousel-left");
const rightBtn = document.getElementById("carousel-right");

function scrollCarousel(direction) {
    const img = carousel.querySelector("img");
    if (!img) return;
    const imgWidth = img.offsetWidth + parseInt(getComputedStyle(img).marginRight || 0);
    if (direction === "left") {
        carousel.scrollBy({ left: -imgWidth, behavior: "smooth" });
    } else {
        carousel.scrollBy({ left: imgWidth, behavior: "smooth" });
    }
}

leftBtn.addEventListener("click", () => scrollCarousel("left"));
rightBtn.addEventListener("click", () => scrollCarousel("right"));

// ...existing code...
/*------Dark Mode-----*/

const body = document.querySelector("body"),
    toggleSwitch = document.getElementById("toggle-switch");

toggleSwitch.addEventListener("click", ()=> {
    body.classList.toggle("dark")
});


/*-------Typing Effect------*/

var typingEffect = new Typed(".typedText", {
    strings: ["Mia Vaugh!"],

    loop: true,
    typeSpeed: 100,
    backSpeed: 80,
    backDelay: 2000,
})

/*--------Scroll Animation--------*/

const sr = ScrollReveal({
    origin: "top",
    distance: "80px",
    duration: 2000,
    reset: true,
});

sr.reveal(".featured-name", {delay: 100});
sr.reveal(".text-info", {delay: 100});
sr.reveal(".text-btn", {delay: 100});
sr.reveal(".social_icons", {delay: 100});
sr.reveal(".featured-image", {delay: 100});

sr.reveal(".project-box", {interval: 200});

sr.reveal(".top-header", {});

const srLeft = ScrollReveal({
    origin: "left",
    distance: "80px",
    duration: 2000,
    reset: true,
})

srLeft.reveal(".about-info", {delay: 100});
srLeft.reveal(".contact-info", {delay: 100});

const srRight = ScrollReveal({
    origin: "right",
    distance: "80px",
    duration: 2000,
    reset: true,
})
srRight.reveal(".skill", {delay: 100});
srRight.reveal(".skill-box", {delay: 100});

/*--------active link--------*/

const sections = document.querySelectorAll("section[id]");

function scrollActive() {
    const scrollY = window.pageYOffset;

    sections.forEach(current => {
        const sectionHeight = current.offsetHeight;
        
            sectionTop = current.offsetTop - 50; // Adjusted for better visibility
            sectionId = current.getAttribute("id");

        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            document.querySelector(".nav-menu a[href*=" + sectionId + "]").classList.add("active-link");
        } else {
            document.querySelector(".nav-menu a[href*=" + sectionId + "]").classList.remove("active-link");
        }
    });
}



