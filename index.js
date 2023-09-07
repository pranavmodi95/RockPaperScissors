const computerChoiceDisplay = document.getElementById('computer-choice')
const userChoiceDisplay = document.getElementById('your-choice')
const resultDisplay = document.getElementById('result')
const possibleChoices = document.querySelectorAll('button')
let userChoice
let computerChoice
let result

possibleChoices.forEach(possibleChoices => possibleChoices.addEventListener('click',(e) =>{
 userChoice = e.target.id
 userChoiceDisplay.innerHTML = userChoice
 generatecomputerchoice()
 getResult()
} ))

function generatecomputerchoice(){
    const randomNumber = Math.floor(Math.random () * possibleChoices.length)+1
    
    if(randomNumber === 1){
    computerChoice = 'Rock'
    }

    if(randomNumber === 2){
    computerChoice = 'Paper'
}
    if(randomNumber === 3){
    computerChoice = 'Scissors'
}
computerChoiceDisplay.innerHTML=computerChoice

}

function getResult(){
    if(computerChoice === userChoice){
        result = "It's draw!"
    }

    if(computerChoice === "Rock" && userChoice === "Paper"){
        result = "You win!"
    }
    if(computerChoice === "Rock" && userChoice === "Scissors"){
        result = "You lose!"
    }
    if(computerChoice === "Paper" && userChoice === "Scissors"){
        result = "You win!"
    }
    if(computerChoice === "Paper" && userChoice === "Rock"){
        result = "You lose!"
    }

    if(computerChoice === "Scissors" && userChoice === "Rock"){
        result = "You win!"
    }

    if(computerChoice === "Scissors" && userChoice === "Paper"){
        result = "You lose!"
    }
    resultDisplay.innerHTML = result 
}
