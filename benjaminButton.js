"use strict"

let btn = document.createElement("button");
btn.appendChild(document.createTextNode("ahhhhhhh click it!"));
let p = document.getElementById("btn");
p.appendChild(btn);

document.getElementById("btn").addEventListener("click", function(){
    console.log("Check it out homie");
});


