// Applying the changes made in the settings
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


// gets the highlighted div DOM element which shows the currently selected timer
export function getCurrentTimer(){
    return document.querySelector('.timer-states .state.current')
}

/**
 * gets the 'data-duration' attribute from getCurrentTimer() (or another element which was 
 * passed in to not have to fetch from the dom again) which is the key of the timerInfo 
 * object to be used for displaying and counting down time */
export function getCurrentTimerKey(currentTimer = false){
    return (currentTimer === false) ? getCurrentTimer().getAttribute('data-duration') : currentTimer.getAttribute('data-duration');
}

/** Updated the dom element displaying the newly selected timer */
export function changeCurrentTimer(clickedItem){
    getCurrentTimer().classList.remove('current')
    clickedItem.classList.add('current')
}

// Updates the remaining time text in the DOM
export function updateCurrentTime(time){
    document.querySelector('.current-time').innerText = time
}

