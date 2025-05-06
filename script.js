const btn = document.querySelector('.btn')
const selector = document.querySelector('#players')
const container = document.querySelector('.container')

btn.addEventListener('click', function () {
     const playerOptions = selector.value
    

    if (Number(playerOptions) === 5) {
        const playerInput = document.createElement('input')
        container.appendChild(playerInput)
    }
})

// if user selects 5-aside display 10 input fields