//1. Changing the text of the h1 element//
let heading = document.getElementById("title");
heading.innerHTML = ("I will miss you all");


//to display a different backgrondcolor and text color when the button(click) is clicked//
function changeButtonstyle(){
    button.style.backgroundColor = "blue";
    button.style.color = "white";  
}
let button = document.querySelector("button");
button.addEventListener("click", changeButtonstyle);



//2. This section reveals the image//
function reveal(){
    // let openbut = document.querySelector(".open");
    // openbut.style.display = "block";
    let img = document.querySelector(".picture");
    img.style.display = "block";//shows the image
    let closebtn = document.querySelector(".closebutton");
    closebtn.style.display = "block";//shows the close button
    
} 
let openbtn = document.querySelector(".openbutton");
openbtn.addEventListener("click",reveal);

// let closebut = document.querySelector(".close");
// closebut.addEventListener("click",revealitems)
