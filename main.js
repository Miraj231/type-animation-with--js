let SPAN = document.querySelector(".SPAN");
let typeText = "expert web deigner";
let value = 0;

setInterval(typing_animation, 150);
function typing_animation(){
    SPAN.innerHTML = typeText.slice(0, value++);
    if(value > typeText.length){
        value = 0;
    }
}