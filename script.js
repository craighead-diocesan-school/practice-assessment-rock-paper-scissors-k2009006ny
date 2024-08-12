function fun() {
    let name = prompt("Hello. What's your name?")
    let get = prompt('Hi ' + name + ", why don't you play rock, paper, scissors with me? Please enter yes or no.")
    get = get.toLowerCase()

    if (get == 'yes') {
        let userAttempt = prompt('We will play three times. Please enter your choice.')
    } else {
        alert('Sorry, ' + get + ' is not avairable word. Please try again from the start.')
    }
    userAttempt = userAttempt.toLowerCase()

    game()
}

function game() {
    let index = 0
    let mine = [
        'rock',
        'paper',
        'scissors',
    ]

    let max = 3
    while (max > 0) {
        count = max - 1
        alert('You have ' + count + ' more.')
    }

    alert('You played ' + userAttempt + 'and I played ' + mine.random() + '.')

    while (wonYou > 0) {
        point = wonYou + 1
        alert('You have got ' + point + ' now.')
    }
    while (wonI > 0) {
        points = wonI + 1
        alert('You have got ' + points + ' now.')
    }

    showResult()
}

function showResult() {
    if (userAttempt == paper) {
        alert()
    } if (mine == userAttempt) {
        alert('We are draw!')
    } if (mine == scissors) {
        alert('I covered you ' + wonI + '!')
    } if (mine == rock) {
        alert('You covered me ' + wonYou + '!')
    }
    else (userAttempt == rock){
        alert()
    } if (mine == userAttempt) {
        alert('We are draw!')
    } if (mine == scissors) {
        alert('You covered me ' + wonYou + '!')
    } if (mine == paper) {
        alert('I covered you ' + wonI + '!')
    } else (userAttempt == scissors){
        alert()
    } if (mine == userAttempt) {
        alert('We are draw!')
    } if (mine == rock) {
        alert('I covered you ' + wonI + '!')
    } if (mine == paper) {
        alert('You covered me ' + wonYou + '!')
    }

    totalResult()
}
function totalResult() {
    if (count >= 3) {
        alert("We played three games! Let's see our result!!")
    }
    if (yourResult >= myRerult) {
        alert('You have won me ' + yourResult + ' and you have won.')
    } if (yourResult == myRerult)
        alert('We are in a draw👀')
    else {
        alert('You have won me ' + myResult + ' and you have won.')
    }

    alert('Thank you for playing with me😊 Good bye.')
}

