const selectbtn = document.querySelector('.btn')
const selector = document.querySelector('#players')
const container = document.querySelector('.container')

selectbtn.addEventListener('click', function () {
     const playerOptions = selector.value

            if (playerOptions !== numberOfPlayers) {
                  document.querySelectorAll('.teamOneInput, .teamTwoInput, .teamOneContainer, .teamTwoContainer').forEach(element => element.remove())

         

            const h3teamOne = document.createElement('h3')
            h3TeamTwo.createTextNode('Team 1')
            container.appendChild(h3teamOne)
    
         for (let i = 0; i < playerOptions; i++) {
            const teamOneContainer = document.createElement('div')
            teamOneContainer.classList.add('teamOneContainer')
            const teamOneInput = document.createElement('input')
            teamOneInput.classList.add('teamOneInput')
            teamOneInput.required = true;
            teamOneContainer.appendChild(teamOneInput)
            container.appendChild(teamOneContainer)
    
         }
    
            const h3TeamTwo = document.createElement('h3')
            h3TeamTwo.createTextNode('Team Two')
            container.appendChild(h3TeamTwo)
    
         for (let i = 0; i < playerOptions; i++){
            const teamTwoContainer = document.createElement('div')
            teamTwoContainer.classList.add('teamTwoContainer')
            const teamTwoInput = document.createElement('input')
            teamTwoInput.classList.add('teamTwoInput')
            teamTwoInput.required = true;
            teamTwoContainer.appendChild(teamTwoInput)
            container.appendChild(teamTwoContainer)
    
         }
    
    
                const submitBtn = document.createElement('button')
                submitBtn.classList.add('submitBtn')
                submitBtn.createTextNode('Submit') 
                container.appendChild(submitBtn)
         
          numberOfPlayers = playerOptions
        
      }
      
    
})

