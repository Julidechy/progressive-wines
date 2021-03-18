var tlLinemusic = gsap.timeline({
    scrollTrigger: {
        trigger: "#linemusic",
        start: "top bottom",
        toggleActions: "restart none restart pause",
    },
});

var tlLogo = gsap.timeline({
    scrollTrigger: {
        trigger: "#logoP",
        start: "top bottom",
        toggleActions: "restart none restart pause",
    },
});

//Tweens

tlLogo
    .to("#logoP", {
        opacity: 0,
        duration: 0.2,
    })
    .to("#logoP", {
        opacity: 1,
        duration: 0.2,
        repeat: 2,
    })
    .to("#logoP", {
        opacity: 0,
        duration: 0.2,
    })
    .to("#logoP", {
        opacity: 1,
        duration: 0.2,
        repeat: 2,
    });

tlLinemusic
    .from("#linemusic h3", {
        duration: 2,
        x: 900,
    })
    .to("#linemusic h3", {
        duration: 1,
        x: 0,
    })
    .from("#linemusic", {
        duration: 2,
        x: -600,
        delay: -3,
    });
