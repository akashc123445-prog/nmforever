/* ======================================
   NM FOREVER
   Nikitha & Mayuk Wedding Website
====================================== */

/* ==========================
   COUNTDOWN TIMER
========================== */

const weddingDate = new Date("June 23, 2026 08:00:00").getTime();

const countdown = setInterval(() => {

    const now = new Date().getTime();

    const distance = weddingDate - now;

    const days = Math.floor(
        distance / (1000 * 60 * 60 * 24)
    );

    const hours = Math.floor(
        (distance % (1000 * 60 * 60 * 24))
        /
        (1000 * 60 * 60)
    );

    const minutes = Math.floor(
        (distance % (1000 * 60 * 60))
        /
        (1000 * 60)
    );

    const seconds = Math.floor(
        (distance % (1000 * 60))
        /
        1000
    );

    document.getElementById("days").innerHTML =
        String(days).padStart(2, "0");

    document.getElementById("hours").innerHTML =
        String(hours).padStart(2, "0");

    document.getElementById("minutes").innerHTML =
        String(minutes).padStart(2, "0");

    document.getElementById("seconds").innerHTML =
        String(seconds).padStart(2, "0");

    if (distance < 0) {

        clearInterval(countdown);

        document.getElementById(
            "countdown-container"
        ).innerHTML =
            "<h2>Today is our Wedding Day ❤️</h2>";

    }

}, 1000);

/* ==========================
   NAVBAR BACKGROUND
========================== */

window.addEventListener("scroll", () => {

    const navbar =
        document.querySelector(".navbar");

    if (window.scrollY > 80) {

        navbar.style.background =
            "rgba(255,255,255,0.95)";

        navbar.style.boxShadow =
            "0 8px 20px rgba(0,0,0,0.08)";

    } else {

        navbar.style.background =
            "rgba(255,255,255,0.30)";

        navbar.style.boxShadow = "none";

    }

});

/* ==========================
   SCROLL REVEAL
========================== */

const revealElements =
document.querySelectorAll(
".story, .events, .gallery, .venues, .event-card, .venue-card"
);

const revealOnScroll = () => {

    revealElements.forEach((element) => {

        const top =
            element.getBoundingClientRect().top;

        const visible =
            window.innerHeight - 120;

        if (top < visible) {

            element.style.opacity = "1";

            element.style.transform =
                "translateY(0px)";

        }

    });

};

revealElements.forEach((element) => {

    element.style.opacity = "0";

    element.style.transform =
        "translateY(40px)";

    element.style.transition =
        "all 1s ease";

});

window.addEventListener(
    "scroll",
    revealOnScroll
);

revealOnScroll();

/* ==========================
   GALLERY LIGHT EFFECT
========================== */

const galleryImages =
document.querySelectorAll(
".gallery-grid img"
);

galleryImages.forEach((image) => {

    image.addEventListener(
        "mouseenter",
        () => {

            image.style.boxShadow =
                "0 20px 40px rgba(0,0,0,0.18)";

        }
    );

    image.addEventListener(
        "mouseleave",
        () => {

            image.style.boxShadow =
                "none";

        }
    );

});

/* ==========================
   FLOATING PETALS
========================== */

function createPetal() {

    const petal =
    document.createElement("div");

    petal.classList.add("petal");

    petal.innerHTML = "🌸";

    petal.style.left =
        Math.random() * window.innerWidth + "px";

    petal.style.fontSize =
        Math.random() * 15 + 15 + "px";

    petal.style.animationDuration =
        Math.random() * 5 + 6 + "s";

    document.body.appendChild(petal);

    setTimeout(() => {

        petal.remove();

    }, 12000);

}

setInterval(createPetal, 700);

/* ==========================
   PETAL STYLES
========================== */

const petalStyles =
document.createElement("style");

petalStyles.innerHTML = `

.petal{
position:fixed;
top:-20px;
pointer-events:none;
z-index:9999;
animation:fall linear forwards;
}

@keyframes fall{

0%{
transform:
translateY(-20px)
rotate(0deg);
opacity:1;
}

100%{
transform:
translateY(110vh)
rotate(360deg);
opacity:0;
}

}

`;

document.head.appendChild(
petalStyles
);

/* ==========================
   HERO FADE-IN
========================== */

window.addEventListener("load", () => {

    const hero =
    document.querySelector(".hero-content");

    hero.style.opacity = "0";

    hero.style.transform =
    "translateY(30px)";

    hero.style.transition =
    "all 1.5s ease";

    setTimeout(() => {

        hero.style.opacity = "1";

        hero.style.transform =
        "translateY(0px)";

    }, 300);

});

/* ==========================
   CONSOLE MESSAGE
========================== */

console.log(
"NM Forever ❤️ Nikitha & Mayuk"
);
