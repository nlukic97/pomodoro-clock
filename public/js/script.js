import * as Time from './Time.js';
import * as TimerSettings from './TimerSettings.js';

// console.log(Time.secondsToTime(61));

const circumference = document.querySelector('.progress-circle').getTotalLength()

function setProgress(percent){
    document.querySelector('.progress-circle').style.strokeDasharray = circumference;
    document.querySelector('.progress-circle').style.strokeDashoffset = circumference - percent * circumference / 100;
}

// setProgress(100)
let countdownInterval;
let countdownActive = false;

setProgress(0)

let i = 0; // this is a global now
function startCountdown(){

    countdownActive = true
    countdownInterval = setInterval(function(){
        setProgress(i)
        if(i >= 100){
            i = 0; //reset global
            countdownActive = false
            return clearInterval(countdownInterval)
        }
        i++
    },1000)  
}

// startCountdown()


// Event listener to open the settings modal
document.querySelector('.settings-btn').addEventListener('click',function(){
    TimerSettings.openModal()
})

var timerInfo = {
    pomodoro:25*60, //minutes times 60 seconds (max limit is 99 minutes in input)
    shortBreak:5*60,
    longBreak:15*60
}


// activated when the color, font, and times are saved
document.querySelector('button.apply-btn').addEventListener('click',function(){
  timerInfo = TimerSettings.applyChanges();

  let key = TimerSettings.getCurrentTimer().getAttribute('data-duration');
  let time = Time.secondsToTime(timerInfo[key])
  TimerSettings.updateCurrentTime(time)

  
})

// close the modal if the x button is pressed
document.querySelector('button.exit-modal-btn').addEventListener('click',function(){
    TimerSettings.closeModal()   
})

// this changes the current clock state
document.querySelectorAll('.timer-states .state').forEach(function(btn){

    btn.addEventListener('click',function(){
        TimerSettings.changeCurrentTimer(this)
        
        let key = this.getAttribute('data-duration');
        let time = Time.secondsToTime(timerInfo[key])
        TimerSettings.updateCurrentTime(time)
    })

})

// Start, pause and restart of the timer
document.querySelector('.timer-handle-button').addEventListener('click',function(){
    this.innerText = ((this.innerText).toLowerCase() === 'start') ? 'pause' : 'start';
    
    // start, pause or restart the timer
})

