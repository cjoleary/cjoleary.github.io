
// click function that shows scroll Y position
let screenWidth = window.outerWidth;
const page = document.querySelector("body");
page.addEventListener("click", ()=>{
  console.log(`Y scroll position is: ${window.scrollY}`);
  console.log(`screen width is: ${screenWidth}`);
});

// fade in content when scrolling work and about sections
    // larger screen
    if(screenWidth >= 1280){
        $("#project-1").animate({"opacity": "0"});
        $("#project-2").animate({"opacity": "0"});
        $("#project-3").animate({"opacity": "0"});
        $("#project-4").animate({"opacity": "0"});
        $("#project-5").animate({"opacity": "0"});
        $("#project-6").animate({"opacity": "0"});
        $("#about").animate({"opacity": "0"});
    
        // if scroll Y position greater than x, fade in
        window.addEventListener("scroll", () => {
        if(window.scrollY > 282){
            $("#project-1").animate({"opacity": "1"}, 1200);
            // turn opacity ot 0 first in css, then opacity to 1.0 here .
        }
        if(window.scrollY > 951){
            $("#project-2").animate({"opacity": "1"}, 1200);
        }
        if(window.scrollY > 1545){
            $("#project-3").animate({"opacity": "1"}, 1200);
        }
        if(window.scrollY > 2200){
            $("#project-4").animate({"opacity": "1"}, 1200);
        }
        if(window.scrollY > 2900){
            $("#project-5").animate({"opacity": "1"}, 1200);
        }
        if(window.scrollY > 3577){
            $("#project-6").animate({"opacity": "1"}, 1200);
        }
        if(window.scrollY > 4200){
            $("#about").animate({"opacity": "1"}, 1200);
        }
        });
    }

    // laptop screens screens
    if(screenWidth >= 1024 && screenWidth < 1280){
        $("#project-1").animate({"opacity": "0"});
        $("#project-2").animate({"opacity": "0"});
        $("#project-3").animate({"opacity": "0"});
        $("#project-4").animate({"opacity": "0"});
        $("#project-5").animate({"opacity": "0"});
        $("#project-6").animate({"opacity": "0"});
        $("#about").animate({"opacity": "0"});
    
        // if scroll Y position greater than x, fade in
        window.addEventListener("scroll", () => {
        if(window.scrollY > 200){
            $("#project-1").animate({"opacity": "1"}, 1200);
            // turn opacity ot 0 first in css, then opacity to 1.0 here .
        }
        if(window.scrollY > 734){
            $("#project-2").animate({"opacity": "1"}, 1200);
        }
        if(window.scrollY > 1217){
            $("#project-3").animate({"opacity": "1"}, 1200);
        }
        if(window.scrollY > 1741){
            $("#project-4").animate({"opacity": "1"}, 1200);
        }
        if(window.scrollY > 2280){
            $("#project-5").animate({"opacity": "1"}, 1200);
        }
        if(window.scrollY > 2785){
            $("#project-6").animate({"opacity": "1"}, 1200);
        }
        if(window.scrollY > 3278){
            $("#about").animate({"opacity": "1"}, 1200);
        }
        });
    }

    // tablet screens
    if(screenWidth >= 768 && screenWidth < 1024){
        $("#project-1").animate({"opacity": "0"});
        $("#project-2").animate({"opacity": "0"});
        $("#project-3").animate({"opacity": "0"});
        $("#project-4").animate({"opacity": "0"});
        $("#project-5").animate({"opacity": "0"});
        $("#project-6").animate({"opacity": "0"});
        $("#about").animate({"opacity": "0"});
    
        // if scroll Y position greater than x, fade in
        window.addEventListener("scroll", () => {
        if(window.scrollY > 233){
            $("#project-1").animate({"opacity": "1"}, 1200);
            // turn opacity ot 0 first in css, then opacity to 1.0 here .
        }
        if(window.scrollY > 678){
            $("#project-2").animate({"opacity": "1"}, 1200);
        }
        if(window.scrollY > 1087){
            $("#project-3").animate({"opacity": "1"}, 1200);
        }
        if(window.scrollY > 1536){
            $("#project-4").animate({"opacity": "1"}, 1200);
        }
        if(window.scrollY > 1929){
            $("#project-5").animate({"opacity": "1"}, 1200);
        }
        if(window.scrollY > 2353){
            $("#project-6").animate({"opacity": "1"}, 1200);
        }
        if(window.scrollY > 2774){
            $("#about").animate({"opacity": "1"}, 1200);
        }
        });
    }

    // mobile screens
    if(screenWidth >= 375 && screenWidth < 768){
        $("#project-1").animate({"opacity": "0"});
        $("#project-2").animate({"opacity": "0"});
        $("#project-3").animate({"opacity": "0"});
        $("#project-4").animate({"opacity": "0"});
        $("#project-5").animate({"opacity": "0"});
        $("#project-6").animate({"opacity": "0"});
        $("#about").animate({"opacity": "0"});
    
        // if scroll Y position greater than x, fade in
        window.addEventListener("scroll", () => {
        if(window.scrollY > 191){
            $("#project-1").animate({"opacity": "1"}, 1200);
            // turn opacity ot 0 first in css, then opacity to 1.0 here .
        }
        if(window.scrollY > 707){
            $("#project-2").animate({"opacity": "1"}, 1200);
        }
        if(window.scrollY > 1254){
            $("#project-3").animate({"opacity": "1"}, 1200);
        }
        if(window.scrollY > 1743){
            $("#project-4").animate({"opacity": "1"}, 1200);
        }
        if(window.scrollY > 2271){
            $("#project-5").animate({"opacity": "1"}, 1200);
        }
        if(window.scrollY > 2707){
            $("#project-6").animate({"opacity": "1"}, 1200);
        }
        if(window.scrollY > 3343){
            $("#about").animate({"opacity": "1"}, 1200);
        }
        });
    }