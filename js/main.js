
// click function that shows scroll Y position
let screenWidth = window.outerWidth;
const page = document.querySelector("body");
page.addEventListener("click", ()=>{
  console.log(`Y scroll position is: ${window.scrollY}`);
  console.log(`screen width is: ${screenWidth}`);
});

// fade in content when scrolling work and about sections
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
      if(window.scrollY > 416){
        $("#project-1").animate({"opacity": "1"}, 1200);
        // turn opacity ot 0 first in css, then opacity to 1.0 here .
      }
      if(window.scrollY > 913){
        $("#project-2").animate({"opacity": "1"}, 1200);
      }
      if(window.scrollY > 1556){
        $("#project-3").animate({"opacity": "1"}, 1200);
      }
      if(window.scrollY > 2189){
        $("#project-4").animate({"opacity": "1"}, 1200);
      }
      if(window.scrollY > 2798){
        $("#project-5").animate({"opacity": "1"}, 1200);
      }
      if(window.scrollY > 3349){
        $("#project-6").animate({"opacity": "1"}, 1200);
      }
      if(window.scrollY > 3970){
        $("#about").animate({"opacity": "1"}, 1200);
      }
    });
  }