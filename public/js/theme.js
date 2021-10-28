// This would be more suitable for the color theme change in the selection modal


let themeButtons = document.querySelectorAll('.timer-states .state')
themeButtons.forEach(function(btn){
    btn.addEventListener('click',function(){
        document.querySelector('.timer-states .state.current').classList.remove('current')
        this.classList.add('current')
        // document.querySelector('html').classList = this.getAttribute('data-theme')
    })
})

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
    document.body.classList.remove('open-settings')    
})

document.querySelector('button.exit-modal-btn').addEventListener('click',function(){
    
    document.body.classList.remove('open-settings')
})