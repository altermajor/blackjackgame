let firstCpuCard = Math.floor(Math.random() *12)
let firstPlayerCard = Math.floor(Math.random() *12)
let secondPlayerCard = Math.floor(Math.random() *12)
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
}

function end() {
    window.location.reload()
}

function hit() {
let extraPlayerCard = Math.floor(Math.random() *11)
extraPlayerCardEl.textContent = "Extra Card: " + extraPlayerCard
playerSum += extraPlayerCard
playerSumEl.textContent = "Sum: " + playerSum
deck -= 1
deckEl.textContent = "Deck: " + deck
greetingEl.textContent = randomMessage
}

function stand() {
let secondCpuCard = Math.floor(Math.random() *12)
secondCpuCardEl.textContent = secondCpuCard
let cpuExtraCard = Math.floor(Math.random() *12)
let cpuSumEl = document.getElementById("cpu-sum")
let cpuSum = firstCpuCard + secondCpuCard + cpuExtraCard
cpuExtraCardEl.textContent = "Extra Card " + cpuExtraCard
cpuSumEl.textContent = "Sum: " + cpuSum
if (cpuSum < playerSum){
    greetingEl.textContent = "You Lose"
    document.getElementById("greeting").style.color = "red"
    document.getElementById("hit-btn").disabled = true
document.getElementById("stand-btn").disabled = true
} else if(cpuSum === 21) {
    greetingEl.textContent = "You Lose"
    document.getElementById("greeting").style.color = "red"
    document.getElementById("hit-btn").disabled = true
document.getElementById("stand-btn").disabled = true
} else {
    greetingEl.textContent = "You Win!"
    document.getElementById("greeting").style.color = "gold"
    document.getElementById("hit-btn").disabled = true
    document.getElementById("stand-btn").disabled = true
}
}

