const btn = document.querySelector('.btn')
const selector = document.querySelector('#players')
const container = document.querySelector('.container')

btn.addEventListener('click', function () {
     const playerOptions = selector.value
     const h3 = document.createElement('h3')
     const teamOne = document.createTextNode('Team 1')
     h3.appendChild(teamOne)
     container.appendChild(h3)

     for (let i = 0; i < playerOptions; i++) {
        const teamOneContainer = document.createElement('div')
        teamOneContainer.classList.add('teamOneContainer')
        const teamOneInput = document.createElement('input')
        teamOneContainer.appendChild(teamOneInput)
        container.appendChild(teamOneContainer)

     }

     if (!document.querySelector('.teamTwoContainer')) {
     const teamTwoContainer = document.createElement('div')
     teamTwoContainer.classList.add('teamTwoContainer')
     const teamTwoInput = document.createElement('input')
     teamTwoContainer.appendChild(teamTwoInput)
     container.appendChild(teamTwoContainer)
     }

})

// if container == "" print team1 input fields, otherwise print team2 input fields