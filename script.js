function myMenuFunction() {
    var menuBth = document.getElementById("myNavMenu");

    if (menuBth.className === "nav-menu") {
        menuBth.className += "responsive";
    } else {
        menuBth.className = "nav-menu";
    }
}

/*------Dark Mode-----*/

const body = document.querySelector("Body"),
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

sr.reveal(".top-header" {});

const srLeft = ScrollReveal({
    origin: "left",
    distance: "80px",
    duration: 2000,
    reset: true,
})

srLeft.reveal(".about-info", {delay: 100});
srLeft.reveal(".contact-info", {delay: 100});



