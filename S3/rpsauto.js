let score = JSON.parse(localStorage.getItem
  ('score'))|| {
    win:0,
    loss:0,
    tie:0
  };
  updateScore();
    let isPlaying = false;
    let intervalId;

  function autoPlay(){   
    if(!isPlaying){
      intervalId = setInterval(function(){
        const userMove = pickNumber();
        userChoice(userMove)
      },1000);
      isPlaying=true;
    } else {
      clearInterval(intervalId);
      isPlaying = false;
    }
  }

  function userChoice(choice){
    const computerPick= pickNumber();

    let result ="";

    if(choice==="rock"){        
      if(computerPick==='rock'){
        result= "Tie.";}
      else if(computerPick==='paper'){
        result= "You lose."}
      else{
        result= "You win."        
      }
    }

    else if(choice==="paper"){
      if(computerPick==='rock'){
        result= "You win."}
      else if(computerPick==='paper'){
        result= "Tie.";}
      else{
        result= "You lose."
      }
    }

    else if(choice="scissors"){                
      if(computerPick==='rock'){
        result= "You lose."}
      else if(computerPick==='paper'){
        result= "You win."}
      else{
        result= "Tie.";
      }
    }


    //scoring
    if (result=="You win."){
        score.win +=1
      }
      else if(result=="You lose."){
        score.loss +=1
      }
      else  if(result=="Tie."){
        score.tie +=1
      }
      localStorage.setItem('score', JSON.stringify(score));

      updateScore();

      document.querySelector('.score').innerHTML = result;

      document.querySelector('.choice').innerHTML =
        `You <img src="images/${choice}-emoji.png"><img src="images/${computerPick}-emoji.png"> Computer`;

  }


  function updateScore(){
  
    document.querySelector('.updateScore')
    .innerHTML =`
        Wins: ${score.win}
        Losses: ${score.loss}
        Tie: ${score.tie}`;
  }

  
  function pickNumber(){ 

    let computerPick='';

    const random = Math.random();

    console.log(random)


    if(0<random&&random<1/3){
      computerPick='rock';
    }
    else if(1/3<random&&random<2/3){
      computerPick='paper';
    }
    else{
      computerPick='scissors';
    } 
    return computerPick;
  }

  
