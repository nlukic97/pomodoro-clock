import * as Time from './Time.js';
import * as TimerSettings from './TimerSettings.js';

let circle = document.querySelector('.progress-circle');

const circumference = circle.getTotalLength()
let countdownInterval;
let countdownActive = false;
let i = 0; // the amount of seconds that has passed on a timer

// This will contain all time durations the user has added for different timers
var timerInfo = {
    pomodoro:25*60, //minutes times 60 seconds (max limit is 99 minutes in input)
    shortBreak:5*60,
    longBreak:15*60
}


setProgress(100)



// Event listener to open the settings modal
document.querySelector('.settings-btn').addEventListener('click',function(){
    TimerSettings.openModal()
})


// activated when the color, font, and times are saved
document.querySelector('button.apply-btn').addEventListener('click',function(){
    resetToStart()

    timerInfo = TimerSettings.applyChanges();
    
    let key = TimerSettings.getCurrentTimerKey();
    let time = Time.secondsToTime(timerInfo[key])
    TimerSettings.updateCurrentTime(time)  
})


// close the modal if the x button is pressed
document.querySelector('button.exit-modal-btn').addEventListener('click',function(){
    TimerSettings.closeModal()   
})


// this changes the displayed timer, preparing it to be ready for countdown
document.querySelectorAll('.timer-states .state').forEach(function(btn){
    btn.addEventListener('click',function(){
        let change = handleActiveTimer()

        if(change === true){
            resetToStart()
            TimerSettings.changeCurrentTimer(this)
            
            let key = this.getAttribute('data-duration');
            let time = Time.secondsToTime(timerInfo[key])
            TimerSettings.updateCurrentTime(time)
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
    i = 0;
    countdownActive = false; 
    document.querySelector('.timer-handle-button').innerText = 'start'
}


// the function that does the counting
function startCountdown(){
    let currentMaxTime = timerInfo[TimerSettings.getCurrentTimerKey()]
    console.log(currentMaxTime);
    countdownActive = true
    
    //removing the animation when setting the circle to the first frame
    if(i === 0){
        circle.classList.remove('with-transition');
        setProgress(0)
    }
    
    //setting the interval (saved in a global variable for later access)
    countdownInterval = setInterval(function(){        
        i++

        //adding transition for the duration of the timer after the first frame (0%) has been added
        if(i === 1) circle.classList.add('with-transition');

        setProgress(i / currentMaxTime * 100)
        TimerSettings.updateCurrentTime(Time.secondsToTime(currentMaxTime - i))

        
        if(i >= currentMaxTime){
            i = 0; //reset global
            countdownActive = false
            document.querySelector('.timer-handle-button').innerText = 'restart'
            return clearInterval(countdownInterval)
        }

    },1000)  
}


// asks for confirmation from a user that they are aware their next action will end their currently active timer
function handleActiveTimer(){
    if(countdownActive === true){
        return confirm('Are you sure you want to end this timer?')
    } else {
        return true
    }
}




