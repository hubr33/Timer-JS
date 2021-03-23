const btnStart = document.querySelector(".main");
const btnReset = document.querySelector(".reset");
const panel = document.querySelector(".time div");

let time = 0;
let active = false;
let intTime;

const timer = () => {
    if (!active) {
    active = !active;
    btnStart.textContent = "Pause";
    intTime = setInterval(start, 10);
    } else {
        active = !active;
        btnStart.textContent = "Start";
        clearInterval(intTime);
    }
    
}

const start = () => {
    time++;
    panel.textContent = (time / 100).toFixed(2);
}

const restart = () => {
    time = 0;
    btnStart.textContent = "Start";
    panel.textContent = "---";
    active = false;
    clearInterval(intTime);
    
}

btnReset.addEventListener("click", restart)
btnStart.addEventListener("click", timer);