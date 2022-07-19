// add bg color to top nav when user scrolls down the page, remove bg color when back to top
const nav = document.querySelector(".navbar");

window.addEventListener("scroll", () => {
    if(window.scrollY > 200) {
        nav.classList.add('bg-light');
    } else {
        nav.classList.remove('bg-light');
    }
});

// gsap scroll animation
function animateFrom(elem, direction) {
    direction = direction || 1;
    var x = 0;
    var y = direction * 100;
    if(elem.classList.contains("slide-right")) {
        x = -100;
        y = 0;
    } else if (elem.classList.contains("slide-left")) {
        x = 100;
        y = 0;
    }
    elem.style.transform = "translate(" + x + "px, " + y + "px)";
    elem.style.opacity = "0";
    gsap.fromTo(elem, {x: x, y: y, autoAlpha: 0}, {
        duration: 1.25, 
        x: 0,
        y: 0, 
        autoAlpha: 1, 
        ease: "expo", 
        overwrite: "auto"
    });
  }
  
function hide(elem) {
    gsap.set(elem, {autoAlpha: 0});
}

document.addEventListener("DOMContentLoaded", function() {
    gsap.registerPlugin(ScrollTrigger);

    gsap.utils.toArray(".slide").forEach(function(elem) {
        hide(elem);
        
        ScrollTrigger.create({
            trigger: elem,
            onEnter: function() { animateFrom(elem) }, 
            onEnterBack: function() { animateFrom(elem, -1) },
            onLeave: function() { hide(elem) }
        });
    });
});