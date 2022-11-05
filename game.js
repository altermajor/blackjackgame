let firstCpuCard = Math.floor(Math.random() *12) + 1
let firstPlayerCard = Math.floor(Math.random() *12)  + 1
let secondPlayerCard = Math.floor(Math.random() *12) + 1
let firstCpuCardEl = document.getElementById("first-cpu-card-el")
let secondCpuCardEl = document.getElementById("second-cpu-card-el")
let firstPlayerCardEl = document.getElementById("first-player-card-el")
let secondPlayerCardEl = document.getElementById("second-player-card-el")
let playerSum = firstPlayerCard + secondPlayerCard
let deck = 52
let messagePrompt = [
    "Make a move!",
    "Hmmmm...",
    "Good choice!",
    "Excellent!",
    "Not bad"
]
let randomMessage = messagePrompt[Math.floor(Math.random() * messagePrompt.length)]
let greetingEl = document.getElementById("greeting")
let deckEl = document.getElementById("card-deck-el")
let playerSumEl = document.getElementById("player-sum")
let extraPlayerCardEl = document.getElementById("player-extra-card")
let cpuExtraCardEl = document.getElementById("cpu-extra-card")
document.getElementById("hit-btn").disabled = true
document.getElementById("stand-btn").disabled = true

function greenbg() {
    document.body.style.backgroundColor = "green"
}

function purplebg() {
    document.body.style.backgroundColor = "purple"
}

function start() {
    renderGame()
}

function renderGame() {
firstCpuCardEl.textContent = firstCpuCard
firstPlayerCardEl.textContent = firstPlayerCard
secondPlayerCardEl.textContent = secondPlayerCard
deck -= 4
deckEl.textContent = "Deck: " + deck
document.getElementById("start-btn").disabled = true
playerSumEl.textContent = "Sum: " + playerSum
greetingEl.textContent = randomMessage
document.getElementById("hit-btn").disabled = false
document.getElementById("stand-btn").disabled = false
 
playerOutcomeStart()

}

function end() {
    window.location.reload()
}

function hit() {
let extraPlayerCard = Math.floor(Math.random() *11) + 1
extraPlayerCardEl.textContent = "Extra Card: " + extraPlayerCard
playerSum += extraPlayerCard
playerSumEl.textContent = "Sum: " + playerSum
deck -= 1
deckEl.textContent = "Deck: " + deck
getRandomMessage()
greetingEl.textContent = randomMessage

if (playerSum === 21) {
    greetingEl.textContent = "Blackjack!"
    document.getElementById("greeting").style.color = "gold"
    disableButtons()
  } else if (playerSum > 21) {
        greetingEl.textContent = "You Lose!"
        document.getElementById("greeting").style.color = "red"
        disableButtons()
    } else {
        getRandomMessage()
    }

}


function getRandomMessage() {
    let newRandomMessage = messagePrompt[Math.floor(Math.random() * messagePrompt.length)]
    if(newRandomMessage === randomMessage) {
        getRandomMessage()
    }else {
        randomMessage = newRandomMessage
    }
}


function stand() {
   standOutcome()
   deck -= 1
   deckEl.textContent = "Deck " + deck
}



function disableButtons() {
    document.getElementById("hit-btn").disabled = true
    document.getElementById("stand-btn").disabled = true
}


function playerOutcomeStart() {
    if (playerSum === 21){
        document.getElementById("hit-btn").disabled = true
        greetingEl.textContent = "Blackjack!"
        document.getElementById("greeting").style.color = "gold"
        document.getElementById("stand-btn").disabled = true  
    } else if (playerSum > 21) {
        document.getElementById("hit-btn").disabled = true
        greetingEl.textContent = "You Lose"
        document.getElementById("greeting").style.color = "red"
        document.getElementById("stand-btn").disabled = true 
    } else{
        getRandomMessage()
        document.getElementById("hit-btn").disabled = false
        document.getElementById("stand-btn").disabled = false
    }
}



function standOutcome() {
    let secondCpuCard = Math.floor(Math.random() *12) + 1
    secondCpuCardEl.textContent = secondCpuCard
    let cpuExtraCard = Math.floor(Math.random() *12) + 1
    let cpuSumEl = document.getElementById("cpu-sum")
    let cpuSum = firstCpuCard + secondCpuCard + cpuExtraCard
    cpuExtraCardEl.textContent = "Extra Card " + cpuExtraCard
    cpuSumEl.textContent = "Sum: " + cpuSum

  if (playerSum === 21) {
    greetingEl.textContent = "Blackjack!"
    document.getElementById("greeting").style.color = "gold"
    disableButtons()
  } else if (playerSum === cpuSum) {
    greetingEl.textContent = "Tie!"
    document.getElementById("greeting").style.color = "yellow"
    disableButtons()
  }
   else if (cpuSum < playerSum) {
    greetingEl.textContent = "You lose!"
    document.getElementById("greeting").style.color = "red"
    disableButtons()
  } else if (playerSum < cpuSum) {
    greetingEl.textContent = "You win!"
    document.getElementById("greeting").style.color = "gold"
    disableButtons()
  } else if (playerSum < 21) {
    if (cpuSum === 21) {
        greetingEl.textContent = "You lose"
        document.getElementById("greeting").style.color = "red"
        disableButtons()
    } else {
        getRandomMessage()
    }
  } else if (playerSum < 21) {
    if (cpuSum > 21) {
        greetingEl.textContent = "You win!"
        document.getElementById("greeting").style.color = "gold"
        disableButtons()
    } else {
        getRandomMessage()
    }
  } else if (playerSum > 21) {
    if (cpuSum > 21) {
        greetingEl.textContent = "Tie!"
        document.getElementById("greeting").style.color = "yellow"
        disableButtons()
    } else {
        greetingEl.textContent = "You lose!"
        document.getElementById("greeting").style.color = "red"
        disableButtons()
    }
  } else if (playerSum < 21) {
    if (cpuSum > 21) {
        greetingEl.textContent = "You win!"
        document.getElementById("greeting").style.color = "gold"
        disableButtons()
    } else {
        getRandomMessage()
    }
  } else {
    getRandomMessage()
  }
}