function fun() {
    let userAttempt = prompt('Please enter your choice.')

    let mine = Math.floor(Math.random() * (2 - 0 + 1) + 0)

    if (userAttempt == 'scissors') {
        if (mine == 0) {
            alert('I chose scissors. We are draw✌')
        }
        if (mine == 1) {
            alert('I chose rock. I win✊')
        }
        if (mine == 2) {
            alert('I chose paper. You win✌')
        }
    }

    if (userAttempt == 'rock') {
        if (mine == 0) {
            alert('I chose scissors. You win✊')
        }
        if (mine == 1) {
            alert('I chose rock. We are draw✊')
        }
        if (mine == 2) {
            alert('I chose paper. I won🖐')
        }
    }

    if (userAttempt == 'paper') {
        if (mine == 0) {
            alert('I chose scissors. I win✌')
        } if (mine == 1) {
            alert('I chose rock. You win🖐')
        } if (mine == 2) {
            alert('I chose paper. We are draw🖐')
        }
    }
}