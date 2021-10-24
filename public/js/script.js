const circumference = document.querySelector('.progress-circle').getTotalLength()
console.log(circumference);

function setProgress(percent){
    document.querySelector('.progress-circle').style.strokeDasharray = circumference;
    document.querySelector('.progress-circle').style.strokeDashoffset = circumference - percent * circumference/100;
}

setProgress(20)