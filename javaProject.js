 "use strict";

// let g00 = "";
// let g01 = "";
// let g02 = "";
// let g10 = "";
// let g11 = "";
// let g12 = "";
// let g20 = "";
// let g21 = "";
// let g22 = "";

// let grid ="_|_|_\n_|_|_\n | |";
// console.log(grid);

//winning combinations. 

// if(((g00 == g01) && (g01 == g02)) && ((g00 == "x") || (g00 == "o"))) {
//     console.log("game over");
//  } 
//  if(((g10 == g11) && (g11 == g12)) && ((g10 == "x") || (g10 == "o"))) {
//      console.log("game over");  
//  }
//  if(((g20 == g21) && (g21 == g22 )) && ((g20 == "x") || (g20 == "o"))) {
//      console.log("game over");
//  }
//  if(((g00 == g10) && (g10 == g20)) && ((g00 == "x") || (g00 == "o"))) {
//      console.log("game over");
//  }
//  if(((g01 == g11) && (g11 == g21)) && ((g01 == "x") || (g01 == "o"))) {
//      console.log("game over");
//  }
//  if(((g02 == g12) && (g12 == g22)) && ((g02 == "x") || (g02 == "o"))) {
//      console.log("game over");
//  }
//  if(((g00 == g11) && (g11 == g22)) && ((g00 == "x") || (g00 == "o"))) {
//      console.log("game over");
//  }
//  if(((g02 == g11) && (g11 == g20)) && ((g02 == "x") || (g02 == "o"))) {
//      console.log("game over")
//  }
//  let choice = prompt("which square g00,g01,g02");
//  console.log(choice);

//  let player = "x";

//  if((choice == "g00") && (player == "x"))
//  g00 =="x";
//  else if ((choice == "g01") && (player == "x"))
//  g01 == "x";
//  else if((choice == "g02") && (player == "x"))
//  g02 == "x";
//  else if ((choice == "g10") && (player == "x"))
//  g10 == "x";
//  else if ((choice == "g11") && (player == 'x'))
//  g11 == "x";
//  else if ((choice == "g12") && (player == "x"))
//  g12 == "x";
//  else if ((choice == "g20") && (player == "x"))
//  g20 == "x";
//  else if ((choice == "g21") && (player == "x"))
//  g21 == "x";
//  else ((choice == "g22") && (player == "x"))
//  g22 == "x";

//  let AI = "o";

//  if((choice == "g00") && (player == "o"))
//  g00 =="o";
//  else if ((choice == "g01") && (player == "o"))
//  g01 == "o";
//  else if((choice == "g02") && (player == "o"))
//  g02 == "o";
//  else if ((choice == "g10") && (player == "o"))
//  g10 == "o";
//  else if ((choice == "g11") && (player == "o"))
//  g11 == "o";
//  else if ((choice == "g12") && (player == "o"))
//  g12 == "o";
//  else if ((choice == "g20") && (player == "o"))
//  g20 == "o";
//  else if ((choice == "g21") && (player == "o"))
//  g21 == "o";
//  else ((choice == "g22") && (player == "o"))
//  g22 == "o";

let promptResponse = prompt("player x its your turn");

function userinput() { 
    let paragraph = document.getElementById("paragraph");
     paragraph.innerHTML = promptResponse;
      
      //console.log(prompt("player x its your turn"))
}


function validateUserInput() { 
    promptResponse = parseInt(promptResponse)
    if(!isNaN(promptResponse))   {
     let paragraph = document.getElementById("paragraph");
     paragraph.innerHTML = promptResponse;
    }
    else {
        promptResponse = prompt("try again this needs to be an integer")
        validateUserInput()
    }
}


validateUserInput()















































