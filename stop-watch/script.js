const stopWatch = document.getElementsByClassName("stopWatch")[0];
const centiSecondsTag = document.getElementsByClassName("centiSeconds")[0];
const startBtn = document.getElementsByClassName("startBtn")[0];
const stopBtn = document.getElementsByClassName("stopBtn")[0];
const restartBtn = document.getElementsByClassName("restartBtn")[0];
const resetBtn = document.getElementsByClassName("resetBtn")[0];

let centiSeconds = 0, seconds = 0, minutes = 0, hours = 0;

const startTime = () => {
    centiSeconds += 1;
    if (centiSeconds === 99) {
        centiSeconds = 0;
        seconds += 1;
        if (seconds === 60) {
            seconds = 0;
            minutes += 1;
            if (minutes === 60) {
                minutes = 0;
                hours += 1;
            }
        }
    }
    putTimeInDom();
}

let setIntervalId;
startBtn.addEventListener("click", () => {
    clearInterval(setIntervalId);
    setIntervalId = setInterval(startTime, 10);
});

stopBtn.addEventListener("click", () => {
    clearInterval(setIntervalId);
})

restartBtn.addEventListener("click", () => {
    clearInterval(setIntervalId);
    centiSeconds = 0, seconds = 0, minutes = 0, hours = 0;
    setIntervalId = setInterval(startTime, 10);
})

resetBtn.addEventListener("click", () => {
    clearInterval(setIntervalId);
    centiSeconds = 0, seconds = 0, minutes = 0, hours = 0;
    putTimeInDom();
})

const putTimeInDom = () => {
    const textCentiSeconds = centiSeconds < 10 ? "0" + centiSeconds.toLocaleString() : centiSeconds;
    const textSeconds = seconds < 10 ? "0" + seconds.toLocaleString() : seconds;
    const textMinutes = minutes < 10 ? "0" + minutes.toLocaleString() : minutes;
    const textHours = hours < 10 ? "0" + hours.toLocaleString() : hours;
    stopWatch.innerHTML = textHours + ":" + textMinutes + ":" + textSeconds;
    centiSecondsTag.innerHTML = textCentiSeconds;
}