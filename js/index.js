// var elm = document.querySelector("#hamb").children[0];
//  i = 0;
// function hamb() {
   
//     j = 0;
//     if (getComputedStyle(elm.children[0]).getPropertyValue("transform") === "matrix(1, 0, 0, 1, 165, 0)") {
//         apear();
//         var myInterval = setInterval(apear, 150);
//     }

//     else {
//         disapear();
//         var myIntervala = setInterval(disapear, 150);
//     }

//     function apear() {
//         elm.children[i].style = "transform: unset";
//         i++;
//         if (i >= 5) {
//             clearInterval(myInterval);
//         }
//     }

//     function disapear() {

//         elm.children[j].style = "transform: translateX(100%)";
//         j++;
//         if (j >= 5) {
//             clearInterval(myIntervala);
//         }
//     }
// }
$(document).ready(function(){

$("#bars").click(function(){
    $("#hamb").animate({
      right: '180px',
    });
  });

  });
 