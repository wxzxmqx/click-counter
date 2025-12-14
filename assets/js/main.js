// DOM
const clickBtn = document.querySelector('.click');
const clickDisplay = document.querySelector('.clicks');
const startBtn = document.querySelector('.start');
const resetBtn = document.querySelector('.reset');
const timer = document.querySelector('.current-timer');
const cpsDisplay = document.querySelector('.cps');
const cpmDisplay = document.querySelector('.cpm');
const durationButtons = document.querySelectorAll('.durations button');

let totalClicks = 0;
let cps = 0;
let cpm = 0;

let duration = 5;
let timeLeft = duration;
let timerId = null;
let isRunning = false;

// start
startBtn.addEventListener("click", () => {
    totalClicks = 0;
    timeLeft = duration;
    isRunning = true;

    clickDisplay.innerHTML = 0;
    timer.innerHTML = timeLeft;


    if (timerId) clearInterval(timerId);

    timerId = setInterval(() => {
        timeLeft--;
        timer.innerHTML = timeLeft;

        if (timeLeft <= 0) {
            clearInterval(timerId);
            isRunning = false;

            // calculate stats
            cps = totalClicks / duration;
            cpm = cps * 60;

            cpsDisplay.innerHTML = `${cps}`;
            cpmDisplay.innerHTML = `${cpm}`;
        }
    }, 1000);
});

clickBtn.addEventListener('contextmenu', e => {
    e.preventDefault();
});

clickBtn.addEventListener('mousedown', (e) => {
    if (!isRunning) return;
    if (e.button === 0 || e.button === 2) {
        totalClicks++;
        clickDisplay.innerHTML = totalClicks;
    }
});


resetBtn.addEventListener("click", () => {
    if (timerId) clearInterval(timerId);

    totalClicks = 0;
    timeLeft = duration;
    isRunning = false;
    cps = 0;
    cpm = 0;

    clickDisplay.innerHTML = 0;
    timer.innerHTML = timeLeft;
    cpsDisplay.innerHTML = 0;
    cpmDisplay.innerHTML = 0;
});

durationButtons.forEach (btn => {
    btn.addEventListener('click', () => {
        if (isRunning) return;

        durationButtons.forEach(b => b.classList.remove('active'));

        btn.classList.add('active');

        duration = Number(btn.dataset.time);
        timeLeft = duration;

        timer.innerHTML = timeLeft;
    })
})