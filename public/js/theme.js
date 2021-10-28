// This would be more suitable for the color theme change in the selection modal

// this changes the current clock state
// let themeButtons = document.querySelectorAll('.timer-states .state')
// themeButtons.forEach(function(btn){
//     btn.addEventListener('click',function(){
//         document.querySelector('.timer-states .state.current').classList.remove('current')
//         this.classList.add('current')
//     })
// })

let timerInfo = {
    pomodoro:25,
    shortBreak:5,
    longBreak:15
}

// Applying the changes made in the modal
let applyBtn = document.querySelector('button.apply-btn').addEventListener('click',function(){
    let font = document.querySelector('input.circle-radio.font:checked').value
    let theme = document.querySelector('input.circle-radio.theme:checked').value
    
    document.querySelector('html').classList = `${font} ${theme}`;

    timerInfo.pomodoro = parseInt(document.querySelector('#pomodoro').value)
    timerInfo.shortBreak = parseInt(document.querySelector('#short-break').value)
    timerInfo.longBreak = parseInt(document.querySelector('#long-break').value)

    closeModal()   
})

document.querySelector('button.exit-modal-btn').addEventListener('click',function(){
    closeModal()   
})

function closeModal(){
    document.body.classList.remove('open-settings') 
}