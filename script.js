const selectbtn = document.querySelector('.btn')
const selector = document.querySelector('#players')
const container = document.querySelector('.container')

let numberOfPlayers = selector.value;

Selectbtn.addEventListener('click', function () {
     const playerOptions = selector.value

     if ((!document.querySelector('.teamOneContainer')) && (!document.querySelector('.teamTwoContainer')) ) {

            if (playerOptions !== numberOfPlayers) {

            document.querySelectorAll('.teamOneInput, .teamTwoInput').forEach(element => element.remove())
        

            const h3teamOne = document.createElement('h3')
            const teamOne = document.createTextNode('Team 1')
            h3teamOne.appendChild(teamOne)
            container.appendChild(h3teamOne)
    
         for (let i = 0; i < playerOptions; i++) {
            const teamOneContainer = document.createElement('div')
            teamOneContainer.classList.add('teamOneContainer')
            const teamOneInput = document.createElement('input')
            teamOneInput.classList.add('teamOneInput')
            teamOneInput.required
            teamOneContainer.appendChild(teamOneInput)
            container.appendChild(teamOneContainer)
    
         }
    
         if (!document.querySelector('.teamTwoContainer')) {
            const h3TeamTwo = document.createElement('h3')
            const teamTwo = document.createTextNode('Team Two')
            h3TeamTwo.appendChild(teamTwo)
            container.appendChild(h3TeamTwo)
        
         }
    
         for (let i = 0; i < playerOptions; i++){
            const teamTwoContainer = document.createElement('div')
            teamTwoContainer.classList.add('teamTwoContainer')
            const teamTwoInput = document.createElement('input')
            teamTwoInput.classList.add('teamTwoInput')
            teamTwoInput.required
            teamTwoContainer.appendChild(teamTwoInput)
            container.appendChild(teamTwoContainer)
    
         }
    
         if ((!document.querySelector('.submitBtn'))) {
    
            if ((document.querySelector('.teamOneContainer')) && (document.querySelector('.teamTwoContainer')) ) {
                const submitBtn = document.createElement('button')
                submitBtn.classList.add('submitBtn')
                const submitBtnTxt = document.createTextNode('Submit') 
                submitBtn.appendChild(submitBtnTxt)
                container.appendChild(submitBtn)
             }
    
         }
         }
         
    
         numberOfPlayers = playerOptions
        }

})

