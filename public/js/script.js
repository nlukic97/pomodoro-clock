import * as Time from './time.js';

// console.log(Time.secondsToTime(61));

const circumference = document.querySelector('.progress-circle').getTotalLength()

function setProgress(percent){
    document.querySelector('.progress-circle').style.strokeDasharray = circumference;
    document.querySelector('.progress-circle').style.strokeDashoffset = circumference - percent * circumference / 100;
}

setProgress(100)


function startCountdown(){
    let i = 0;
    let int = setInterval(function(){
        setProgress(i)
        if(i >= 100){
            return clearInterval(int)
        }
        i++
    },1000)  
}

startCountdown()


// Event listener to open the settings modal
document.querySelector('.settings-btn').addEventListener('click',function(){
    document.body.classList.add('open-settings')
})

