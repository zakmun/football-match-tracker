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
        const teamOneInput = document.createElement('input')
        teamOneContainer.appendChild(teamOneInput)
        container.appendChild(teamOneContainer)

     }

})

// if button is clicked then display 2 team input fields