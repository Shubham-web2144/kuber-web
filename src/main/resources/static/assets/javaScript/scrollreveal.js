// scrollreveal lib for animations

// scrollreveal object
let sr = new ScrollReveal();

console.log(sr)

sr.reveal(".navbar-brand", {
    origin: "top",
    delay: 500
});

sr.reveal(".nav-link", {
    origin: "top",
    delay: 500
});

sr.reveal(".btn", {
    origin: "top",
    delay: 500
});

sr.reveal(".mainContainer__service-heading h3", {
    origin: "left",
    distance: "50px",
    reset: true,
    delay: 300
});

sr.reveal(".mainContainer__service-heading h5", {
    origin: "left",
    distance: "50px",
    reset: true,
    delay: 300
});

sr.reveal(".mainConatainer__service-cards-card", {
    origin: "bottom",
    distance: "30px",
    reset: true,
    delay: 350
});

sr.reveal(".mainContainer__puja-cards-card", {
    origin: "right",
    distance: "130px",
    reset: true,
    delay: 450
});

sr.reveal(".mainContainer__about-card-cards", {
    origin: "top",
    distance: "120px",
    reset: true,
    delay: 100
});



