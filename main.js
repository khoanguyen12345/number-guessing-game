let guessRemaining = 5
let winCount = 0
let lossCount =0
let time = 15
let myTime
randomNumber = getRandomInt(1,100)
function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
}

function timeCounting() {
    myTime = setInterval(() => {
        time -= 1
        if (time <1){
            timeOut()
            guessRemaining = guessRemaining -1
            document.getElementById("guesses-remaining").innerHTML= `${guessRemaining}`
            time = 15
            timeCounting()
            if (guessRemaining<1){
            document.getElementById("guessBtn").disabled = true;
            document.getElementById("guesses-remaining").innerHTML= `You Lost`
            document.getElementById("resultArea").innerHTML = `The correct answer is: ${randomNumber}`
            timeOut()
            }
        }
        document.getElementById('timerArea').innerHTML = time
    }, 1000)
}
function timeOut() {
    clearInterval(myTime)
}
function guessNumber(){
    time =15
    let guess = document.getElementById("user-guess").value
    document.getElementById("lossCounter").innerHTML= `Wins: ${winCount}`
    document.getElementById("winCounter").innerHTML= `Losses: ${lossCount}`
    var history = []
    history.push(guess)
    for (i = 0; i < history.length; i++) {
        document.getElementById("historyArea").innerHTML += history[i] + " ";
    };
    if (guessRemaining >1){
        if (guess === randomNumber){
        document.getElementById("resultArea").innerHTML = `You Won!`
        document.getElementById("guesses-remaining").innerHTML= `Yeah!`
        winCount = winCount +1
    }else if (guess < randomNumber){
        document.getElementById("resultArea").innerHTML= `The guess is too low`
        guessRemaining= guessRemaining-1
        document.getElementById("guesses-remaining").innerHTML= `${guessRemaining}`
    }else if (guess > randomNumber){
        document.getElementById("resultArea").innerHTML= `The guess is too high`
        guessRemaining = guessRemaining-1
        document.getElementById("guesses-remaining").innerHTML= `${guessRemaining}`
    }}else{
            document.getElementById("guessBtn").disabled = true;
            document.getElementById("guesses-remaining").innerHTML= `You Lost`
            document.getElementById("resultArea").innerHTML = `The correct answer is: ${randomNumber}`
            timeOut()
    }
}
function reset(){
    guessRemaining = 5
    time = 15
    lossCount = lossCount +1
    randomNumber = getRandomInt(1,100)
    timeCounting()
    document.getElementById("lossCounter").innerHTML= `Wins: ${winCount}`
    document.getElementById("winCounter").innerHTML= `Losses: ${lossCount}`
    document.getElementById("guessBtn").disabled = false;
    document.getElementById("resultArea").innerHTML = ``
    document.getElementById("historyArea").innerHTML =``
    document.getElementById("guesses-remaining").innerHTML= `${guessRemaining}`
}

function start(){
    timeCounting()
    document.getElementById("guessBtn").hidden = false;
    document.getElementById("resetBtn").hidden = false;
    document.getElementById("startBtn").hidden = true;
}