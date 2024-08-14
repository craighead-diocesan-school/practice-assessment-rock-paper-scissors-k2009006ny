function fun() {




    let scores = []

    let count = 3
    while (count > 0) {
        count = count - 1
        let userAttempt = prompt('Please enter your choice.')
        userAttempt = userAttempt.toLocaleLowerCase()

        let mine = Math.floor(Math.random() * (2 - 0 + 1) + 0)

        if (userAttempt == 'scissors') {
            if (mine == 0) {
                alert('I chose scissors. We are draw✌') + scores.push("Computer won")
            }
            if (mine == 1) {
                alert('I chose rock. I win✊') + scores.push("Computer won")
            }
            if (mine == 2) {
                alert('I chose paper. You win✌') + scores.push("You won")
            }
        }

        if (userAttempt == 'rock') {
            if (mine == 0) {
                alert('I chose scissors. You win✊') + scores.push("You won")
            }
            if (mine == 1) {
                alert('I chose rock. We are draw✊') + scores.push("Computer won")
            }
            if (mine == 2) {
                alert('I chose paper. I won🖐') + scores.push("Computer won")
            }
        }

        if (userAttempt == 'paper') {
            if (mine == 0) {
                alert('I chose scissors. I win✌') + scores.push("Computer won")
            } if (mine == 1) {
                alert('I chose rock. You win🖐') + scores.push("You won")
            } if (mine == 2) {
                alert('I chose paper. We are draw🖐') + scores.push("Computer won")
            }
        }
    }

    alert(scores)



}