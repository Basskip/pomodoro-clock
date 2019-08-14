var remaining = 25 * 60;
var timer;
var mode = 'pomodoro';

function start() {
    timer = setInterval(tick, 1000);
}

function pomodoro() {
    stop();
    mode = 'pomodoro';
    setCountdown(25 * 60);
}

function timeout() {
    stop();
    mode = 'break';
    setCountdown(5 * 60);
}

function tick() {
    remaining--;
    drawClock(remaining);
    if (remaining === 0) {
        document.getElementById('alert').play();
        stop();
        if (mode === 'pomodoro') {
            setCountdown(5 * 60);
            mode = 'break';
        } else {
            setCountdown(25* 60);
            mode = 'pomodoro';
        }
    }
}

function stop() {
    clearInterval(timer);
}

function reset() {
    stop();
    if (mode === 'pomodoro') {
        pomodoro();
    } else if (mode === 'break') {
        timeout();
    }
}

function setCountdown(seconds) {
    remaining = seconds;
    drawClock(remaining);
}

function drawClock(seconds) {
    var minutes = Math.floor(seconds / 60);
    var seconds = seconds - minutes * 60;
    minutes = minutes < 10 ? "0" + minutes : minutes;
    seconds = seconds < 10 ? "0" + seconds : seconds;
    document.getElementById("countdown").innerHTML = minutes + ":" + seconds;
}