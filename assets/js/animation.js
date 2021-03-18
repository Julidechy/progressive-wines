//TimeLines

var tlMusicaParaConectar = gsap.timeline({
  scrollTrigger: {
    trigger: "#triggerMusica",
    start: "top bottom",
    toggleActions: "restart none restart pause",
  },
});

var tlVinosQueConectan = gsap.timeline({
  scrollTrigger: {
    trigger: "#vinosqueconectan",
    start: "top bottom",
    toggleActions: "restart none restart pause",
  },
});

var tlLinemusic = gsap.timeline({
  scrollTrigger: {
    trigger: "#linemusic",
    start: "top bottom",
    toggleActions: "restart none restart pause",
  },
});

var tlLinetasting = gsap.timeline({
  scrollTrigger: {
    trigger: "#linetasting",
    start: "top bottom",
    toggleActions: "restart none restart pause",
  },
});

var tlLinewlw = gsap.timeline({
  scrollTrigger: {
    trigger: "#linewlw",
    start: "top bottom",
    toggleActions: "restart none restart pause",
  },
});

var tlAleL = gsap.timeline({
  scrollTrigger: {
    trigger: "#AleLacroixdiv img",
    start: "top bottom",
    end: "bottom top",
    toggleActions: "restart none restart pause",
  },
});

var tlLyoko = gsap.timeline({
  scrollTrigger: {
    trigger: "#Lyokodiv img",
    start: "top bottom",
    end: "bottom top",
    toggleActions: "restart none restart pause",
  },
});

var tlYasmin = gsap.timeline({
  scrollTrigger: {
    trigger: "#Yasmindiv img",
    start: "top bottom",
    end: "bottom top",
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

tlYasmin
  .from("#Yasmin h3", {
    duration: 3,
    opacity: 0,
    y: -120,
  })
  .from("#Yasmindiv img, #Yasmindiv p", {
    duration: 2.2,
    opacity: 0,
    x: 400,
    delay: -4,
  });

tlLyoko
  .from("#Lyoko h3", {
    duration: 3,
    opacity: 0,
    y: -120,
  })
  .from("#Lyokodiv img, #Lyokodiv p", {
    duration: 2.2,
    opacity: 0,
    x: -400,
    delay: -4,
  });

tlAleL
  .from("#AleLacroix h3", {
    duration: 3,
    opacity: 0,
    y: -120,
  })
  .from("#AleLacroixdiv img, #AleLacroix p", {
    duration: 2.2,
    opacity: 0,
    x: 400,
    delay: -4,
  });

tlLinewlw
  .from("#linewlw h3", {
    duration: 2,
    x: 900,
  })
  .to("#linewlw h3", {
    duration: 1,
    x: 0,
  })
  .from("#linewlw", {
    duration: 2,
    x: -600,
    delay: -3,
  });

tlLinetasting
  .from("#linetasting h3", {
    duration: 2,
    x: -900,
  })
  .to("#linetasting h3", {
    duration: 1,
    x: 0,
  })
  .from("#linetasting", {
    duration: 2,
    x: 600,
    delay: -3,
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

tlMusicaParaConectar.from("#musicaparaconectar", {
  duration: 3,
  x: 400,
  opacity: 0,
});

tlVinosQueConectan.from("#vinosqueconectan", {
  duration: 3,
  x: -400,
  opacity: 0,
});

/* const caja = document.getElementById("glowAnimation");
const parrafos = document.querySelectorAll("#glowAnimation p");

for (const parrafo of parrafos) {
  parrafo.addEventListener("mouseenter", lightGlowEffect);
}
//Timelines
var tl = gsap.timeline();
var tl2 = gsap.timeline({
  repeat: -1,
  repeatDelay: 0,
});
//
tl.from(".progressive", {
  duration: 2,
  opacity: 0,
});

caja.addEventListener("mouseenter", lightGlowEffect);
caja.addEventListener("mouseout", clearTimeline);

function lightGlowEffect() {
  tl2
    .from("#glowAnimation", {
      duration: 2,
      borderWidth: 0,
      boxShadow: "0 0 40px 0 #FE02FE",
      ease: "bounce.in",
    })
    .to("#glowAnimation", {
      duration: 0.1,
      borderWidth: 0,
      boxShadow: "0 0 0 0 #FE02FE",
    });
  console.log("in");
}

function clearTimeline() {
  console.log("out");
  tl2.progress(1);
  tl2.clear();
}
 */
