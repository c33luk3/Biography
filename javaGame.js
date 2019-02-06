"use strict"
    
	let y = Math.floor((Math.random() * 100) + 1); 
	
	// counting the number of guesses 
	
	let guess = 1; 
	
    document.getElementById("submitguess").onclick = function() { 
        console.log("sumbitguess");
    }
    
	
// number guessed by user	 
 let x = document.getElementById("guessField").value;{
}

if(x == y) {	
    prompt("CONGRATULATIONS!!! YOU GUESSED IT RIGHT");
}	 
else if(x > y) { (guess++); 
    prompt("OOPS SORRY!! TRY A SMALLER NUMBER"); 
}
else{
prompt("OOPS SORRY!! TRY A GREATER NUMBER")
prompt();

}




    