// converts seconds to a human readable time (with minutes and hours)
export function secondsToTime(seconds){
    let formatMinutes = 0;
    let formatSeconds = 0    
    
    // gettings formatMinutes
    while(seconds / 60 >= 1) {
        formatMinutes += 1
        seconds -= 60
    }

    formatMinutes = (formatMinutes < 10) ? '0' + formatMinutes.toString() : formatMinutes.toString(); 
    formatSeconds = (seconds < 10) ? '0' + seconds.toString() : seconds.toString();

    return formatMinutes + ':'+ formatSeconds;
}


// calculated the % of time that has passed - used to determine how much % of the circle line should be drawn
export function getTimePassPercentage(curr, total){
    return curr / total * 100;
}