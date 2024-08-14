function fun() {
    let name = prompt("Hello. What's your name?")
    let get = prompt('Hi ' + name + ", why don't you play rock paper scissors with me? Please enter yes or no.")
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


    let mine_r = Math.floor(Math.random)

    // let max = 3
    // while (max > 0) {
    //     count = max - 1
    //     alert('You have ' + count + ' more.')
    // }

    // alert('You chose ' + userAttempt + ', and I chose ' + mine.random() + '.')


    // while (wonYou > 0) {
    //     point = wonYou + 1
    //     alert('You have got ' + point + ' now.')
    // }
    // while (wonI > 0) {
    //     points = wonI + 1
    //     alert('You have got ' + points + ' now.')
    // }

    showResult()
}

function showResult() {
    if (userAttempt == 'scissors') {
        if (mine == 0) {
            alert('I chose scissors. We are draw!')
        } 
        if (mine == 1) {
            alert('I covered you ' + wonI + '!')
        } 
        if (mine == 2) {
            alert('You covered me ' + wonYou + '!')
        }
    }

    if (userAttempt == 1) {
        alert()
    } if (mine == userAttempt) {
        alert('We are draw!')
    } if (mine < 1) {
        alert('You covered me ' + wonYou + '!')
    } if (mine > 1) {
        alert('I covered you ' + wonI + '!')
    }

    if (userAttempt == 2) {
        alert()
    } if (mine == userAttempt) {
        alert('We are draw!')
    } if (mine == 0) {
        alert('I covered you ' + wonI + '!')
    } if (mine == 1) {
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

