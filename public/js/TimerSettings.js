// Applying the changes made in the modal

export function applyChanges(){
    let font = document.querySelector('input.circle-radio.font:checked').value
    let theme = document.querySelector('input.circle-radio.theme:checked').value
    
    document.querySelector('html').classList = `${font} ${theme}`;

    let timerInfo = {};

    timerInfo.pomodoro = parseInt(document.querySelector('#pomodoro').value) * 60
    timerInfo.shortBreak = parseInt(document.querySelector('#shortBreak').value) * 60
    timerInfo.longBreak = parseInt(document.querySelector('#longBreak').value) * 60
    
    closeModal()
    return timerInfo;
}


export function closeModal(){
    document.body.classList.remove('open-settings') 
}


export function openModal(){
    document.body.classList.add('open-settings')
}


export function getCurrentTimer(){
    return document.querySelector('.timer-states .state.current')
}

export function changeCurrentTimer(clickedItem){
    getCurrentTimer().classList.remove('current')
    clickedItem.classList.add('current')
}


export function updateCurrentTime(time){
    document.querySelector('.current-time').innerText = time
}

