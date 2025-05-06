const btn = document.querySelector('.btn')
const selector = document.querySelector('#players')
const container = document.querySelector('.container')

btn.addEventListener('click', function () {
     const playerOptions = selector.value

     for (let i = 0; i < playerOptions; i++) {
        const playerInput = document.createElement('input')
        container.appendChild(playerInput)
     }
    

})
