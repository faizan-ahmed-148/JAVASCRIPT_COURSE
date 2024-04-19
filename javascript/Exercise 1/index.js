    GuessTheNumber = ()=>{let x = Math.floor((Math.random() * 100) + 1);
    let i = 1
    do{
      let n = Number.parseInt(prompt("Enter a Number : "))
    if(x == n){
      console.log("You guessed the correct number that is ",n," at ", i ," attempts") 
      break
    }
    else if(x < n){
      console.log("Your guessed number is greater than the real number,"," number of attempts : ",i)
    }
    else if(x > n){
      console.log("Your guessed number is lesser than the real number,"," number of attempts : ",i)
    }
      i++ ;
    }while(x != 0)}
    
    GuessTheNumber() ;
    console.log("Done")