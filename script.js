const btn = document.querySelector('.btn')
const selector = document.querySelector('#players')

btn.addEventListener('click', function () {
    const playerOptions = selector.value
    console.log(playerOptions)
})