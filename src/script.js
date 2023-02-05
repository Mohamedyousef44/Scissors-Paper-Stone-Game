let btnsGame = document.querySelectorAll('.btnId');
let divBtns = document.getElementById('divBtns');
let gameContainer = document.getElementById('gameContainer');
let putBtn = document.querySelectorAll('.putBtn');
let playAgainBtn = document.getElementById('playAgain');

let count = 0;


// function to create btn

function createBtn(class1 , class2 , text){
    let btn = document.createElement('button');
    btn.classList.add(class1);
    btn.classList.add(class2);
    btn.classList.add('remove');
    btn.innerText = text ;
    return btn;
}

let arrOfBtns = [createBtn('btn' , 'btn-primary' , 'Scissors'),
 createBtn('btn' , 'btn-success' , 'Paper'),
 createBtn('btn' , 'btn-warning' , 'Stone')];


// control of btns of the main game

btnsGame.forEach(button=>{

    let score = document.getElementById('score');
    let gameStatus = document.getElementById('gameStatus');
    let winSentense = ['AAAAAAAAh You Win','You win , it is just a luck', 'You win Again' ]
    let loseSentense = ['HAHAHAHAH You Lose','Sorry , looser', 'Try Again , you lose' ]

    button.addEventListener('click',function(e){
        
            let idx = Math.floor(Math.random()*3);
            divBtns.style.display = 'none';
            gameContainer.style.display = 'flex';
            putBtn[0].prepend(arrOfBtns[idx])
            
            
            
            if(e.currentTarget.id == "scissors"){
                
                putBtn[1].prepend(createBtn('btn' , 'btn-primary' , 'Scissors'))
                if(idx === 1){
                    count++;
                    score.innerText = count;
                    gameStatus.innerText = winSentense[idx];

                }else if(idx === 0){
                    count--;
                    score.innerText = count;
                    gameStatus.innerText = 'Tie , So Close'
                }
                else{
                    gameStatus.innerText = loseSentense[idx]
                }

            }else if(e.currentTarget.id == "paper"){
               
                putBtn[1].prepend(createBtn('btn' , 'btn-success' , 'Paper'))
                if(idx === 2){
                    count++;
                    score.innerText = count;
                    gameStatus.innerText = winSentense[idx]

                }else if(idx === 1){
                    gameStatus.innerText = 'Tie , So Close'
                }
                else{
                    count--;
                    score.innerText = count;
                    gameStatus.innerText = loseSentense[idx]
                }

            }else{
                
                putBtn[1].prepend(createBtn('btn' , 'btn-warning' , 'Stone'))
                if(idx === 0){
                    count++;
                    score.innerText = count;
                    gameStatus.innerText = winSentense[idx]

                }
                else if(idx === 2){
                    gameStatus.innerText = 'Tie , So Close'
                }
                else{
                    count--;
                    score.innerText = count;
                    gameStatus.innerText = loseSentense[idx]
                }
            }

            gameOver(count); 
           
    })
    

    
})

// control the play again btn

playAgainBtn.addEventListener('click' , ()=>{

    divBtns.style.display = 'flex';
    gameContainer.style.display = 'none';
    putBtn[0].removeChild(putBtn[0].firstElementChild);
    putBtn[1].removeChild(putBtn[1].firstElementChild);
})

// game over

function gameOver(count){
    if(count == -10){
        alert('Game Over')
    }else if (count == 10){
        alert('Congratulations')
    }
}
