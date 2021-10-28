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