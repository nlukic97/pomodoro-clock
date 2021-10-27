const circumference = document.querySelector('.progress-circle').getTotalLength()
console.log(circumference);

function setProgress(percent){
    document.querySelector('.progress-circle').style.strokeDasharray = circumference;
    document.querySelector('.progress-circle').style.strokeDashoffset = circumference - percent * circumference/100;
}

setProgress(99)
// setProgress(98)




function startCountdown(){
    let i = 0;
    let int = setInterval(function(){
        setProgress(i)
        if(i >= 100){
            return clearInterval(int)
        }
        i++
    },1)
}

// startCountdown()