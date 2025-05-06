const btn = document.querySelector('.btn')
const selector = document.querySelector('#players')
const container = document.querySelector('.container')

btn.addEventListener('click', function () {
     const playerOptions = selector.value
     const h3 = document.createElement('h3')
     const teamOne = document.createTextNode('Team 1')
     container.appendChild(teamOne)

     for (let i = 0; i < playerOptions; i++) {
        const playerInput = document.createElement('input')
        container.appendChild(playerInput)
     }
    

})
