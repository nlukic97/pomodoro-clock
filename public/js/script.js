const circumference = document.querySelector('.progress-circle').getTotalLength()
// console.log(circumference);

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
    },100)  
}

// startCountdown()


// Event listener to open the settings modal
document.querySelector('.settings-btn').addEventListener('click',function(){
    document.body.classList.add('open-settings')
})

// Event listener to close the settings modal (and apply the changes)
document.querySelector('.apply-btn').addEventListener('click',function(){
    //do some other stuff too
    document.body.classList.remove('open-settings')
})

