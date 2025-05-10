const selectbtn = document.querySelector('.btn')
const selector = document.querySelector('#players')
const container = document.querySelector('.container')

let currentPlayerCount = Number(selector.value);

selectbtn.addEventListener('click', function () {
     const selectedPlayerCount = Number(selector.value)

      if (selectedPlayerCount !== currentPlayerCount) {
         document.querySelectorAll('input, .teamOneContainer, .teamTwoContainer, h3, .submitBtn').forEach(element => element.remove())

         
            const h3TeamOne = document.createElement('h3')
            h3TeamOne.textContent = 'Team 1'
            container.appendChild(h3TeamOne)
    
         for (let i = 0; i < selectedPlayerCount; i++) {
            const teamOneContainer = document.createElement('div')
            teamOneContainer.classList.add('teamOneContainer')
            const teamOneInput = document.createElement('input')
            teamOneInput.classList.add('teamOneInput')
            teamOneInput.required = true;
            teamOneContainer.appendChild(teamOneInput)
            container.appendChild(teamOneContainer)
    
         }
    
            const h3TeamTwo = document.createElement('h3')
            h3TeamTwo.textContent = 'Team Two' 
            container.appendChild(h3TeamTwo)
    
         for (let i = 0; i < selectedPlayerCount; i++){
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
            submitBtn.textContent = 'Submit';
            container.appendChild(submitBtn)
         
                
          currentPlayerCount = selectedPlayerCount
        
      }
      
    
})

