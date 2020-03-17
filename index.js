const title = document.querySelector("#title");

// const BASE_COLOR = "rgb(52, 74, 94)";
// const OTHER_COLOR = "rgb(72,23,34)";

// function handleClick(){
//     const currentColor = title.style.color;
//     if(currentColor === BASE_COLOR){
//         title.style.color = OTHER_COLOR;
//     } else {
//         title.style.color = BASE_COLOR;       
//     }
// }
const CLICKED_CLASS = "clicked";
function handleClick(){
    
}
function init(){
    title.style.color = BASE_COLOR;
    title.addEventListener("click",handleClick);
}
init();