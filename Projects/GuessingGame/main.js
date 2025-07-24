


// Convert the string guess to an integer so that we can compare
 let answer = null;
 let guess =  Math.floor(Math.random() * 20) + 1;
 let attempt = 0 
 let attemptLeft = 4
 alert(guess);

while (answer !== guess && attemptLeft > 0){

       answer =parseInt(prompt ("Please guess the secret number (1-20)"));


        

        if (answer !==  guess){

            alert("You did not get the answer");

            attempt = attempt + 1;
            attemptLeft = attemptLeft - 1 ;
            
           
            alert("You have "+attemptLeft  +" attempts left")
           

            if (answer < guess){

             alert("aim a little higher");

            } else {

              alert("aim a lower");

            }
            
        } else {

          alert("You got the answer");
          alert("congrats for winning the game lucky guy");
          break;
        }

      
  }
  
  if (answer !== guess) {
         alert("You have Run out of Attempts  The correct number was: " + guess) 
        }
       
  
 
/////////////////////////////////////////////////////////