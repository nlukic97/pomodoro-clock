import * as Time from './Time.js';
import * as TimerSettings from './TimerSettings.js';

let circle = document.querySelector('.progress-circle');

const circumference = circle.getTotalLength()
let countdownInterval;
let secondsPassed = 0; // the amount of seconds that has passed on the timer
let countdownActive = false;

setProgress(100)

// This will contain all time durations the user has added for different timers
var timerInfo = {
    pomodoro:25*60, //minutes times 60 seconds (max limit is 99 minutes in input)
    shortBreak:5*60,
    longBreak:15*60
}



/** ************************ Event Listeners ************************ */
// Event listener to open the settings modal
document.querySelector('.settings-btn').addEventListener('click',function(){
    TimerSettings.openModal()
})


// activated when the color, font, and times are saved
document.querySelector('button.apply-btn').addEventListener('click',function(){
    if(handleActiveTimer() === true){
        resetToStart()
    
        timerInfo = TimerSettings.applyChanges();
        
        let key = TimerSettings.getCurrentTimerKey();
        TimerSettings.updateCurrentTime(Time.secondsToTime(timerInfo[key]))  
    }
})


// close the modal if the x button is pressed
document.querySelector('button.exit-modal-btn').addEventListener('click',function(){
    TimerSettings.closeModal()   
})


// this changes the displayed timer, preparing it to be ready for countdown
document.querySelectorAll('.timer-states .state').forEach(function(btn){
    btn.addEventListener('click',function(){
        if(handleActiveTimer() === true){
            resetToStart()
            TimerSettings.changeCurrentTimer(this)
            
            let key = TimerSettings.getCurrentTimerKey(this);
            TimerSettings.updateCurrentTime(Time.secondsToTime(timerInfo[key]))
        }
    }) 
})


// Start, pause and restart of the timer
document.querySelector('.timer-handle-button').addEventListener('click',function(){
    let currText = (this.innerText).toLowerCase()
    if( currText === 'start'){
        this.innerText = 'pause'
        startCountdown()
    } else if(currText === 'restart'){
        resetToStart() //without transition
        startCountdown()
        this.innerText = 'pause'
    } else {
        this.innerText = 'start'
        clearInterval(countdownInterval)
    } 
    
    // start, pause or restart the timer
})



/** ************************ Methods ************************ */

// function that draws the circle in proportion to the % of time that has passed on the counter
function setProgress(percent){
    circle.style.strokeDasharray = circumference;
    circle.style.strokeDashoffset = circumference - percent * circumference / 100;
}

// setting the timer back to zero
function resetToStart(){
    clearInterval(countdownInterval)
    circle.classList.remove('with-transition')
    setProgress(100)
    secondsPassed = 0;
    countdownActive = false; 
    document.querySelector('.timer-handle-button').innerText = 'start'
}


// the function that does the counting
function startCountdown(){
    let currentMaxTime = timerInfo[TimerSettings.getCurrentTimerKey()]
    countdownActive = true
    
    // Only set the progress to 0 if 0 seconds have passed (the timer has been started and not resumed after pasue)
    if(secondsPassed === 0) setProgress(0); // circle.classList.remove('with-transition');
    
    //setting the interval (saved in a global variable for later access)
    countdownInterval = setInterval(function(){        
        secondsPassed++

        //adding transition for the duration of the timer after the first frame (0%) has been added
        if(secondsPassed === 1) circle.classList.add('with-transition');

        setProgress(secondsPassed / currentMaxTime * 100)
        TimerSettings.updateCurrentTime(Time.secondsToTime(currentMaxTime - secondsPassed))

        if(secondsPassed >= currentMaxTime){
            secondsPassed = 0; //reset global
            countdownActive = false
            document.querySelector('.timer-handle-button').innerText = 'restart'
            return clearInterval(countdownInterval)
        }

    },1000)  
}


// asks for confirmation from a user that they are aware their next action will end their currently active timer
function handleActiveTimer(){
    if(countdownActive === true){
        return confirm('Are you sure you want to end the active timer?')
    } else {
        return true
    }
}




