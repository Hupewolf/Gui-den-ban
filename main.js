const secondHand = document.querySelector('.second');
const countText = document.querySelector('.count-text');

const clockBox = document.querySelector('.clock-box');
const questionBox = document.querySelector('.question-box');
const successBox = document.querySelector('.success-box');
const questionText = document.querySelector('.question-text');

const yesBtn = document.querySelector('.yes');
const noBtn = document.querySelector('.no');

let intervalId;
let attempt = 0;

const questions = [
    "ối bấm nhầm hay sao á",
    "nhầm ời",
    "chắc chắn nhầm",
    "…"
];

function startCountdown(seconds) {
    cancelAnimationFrame(intervalId);

    let startTime = null;

    countText.textContent = seconds;
    clockBox.classList.add("active");
    questionBox.classList.remove("active");
    successBox.classList.remove("active");

    function animate(timestamp) {
        if (!startTime) startTime = timestamp;

        const elapsed = (timestamp - startTime) / 1000;
        const timeLeft = Math.max(seconds - elapsed, 0);

        countText.textContent = Math.ceil(timeLeft);

        const angle = (timeLeft / seconds) * 360 - 90;
        secondHand.style.transform = `rotate(${angle}deg)`;

        if (timeLeft > 0) {
            intervalId = requestAnimationFrame(animate);
        } else {
            showQuestion();
        }
    }

    intervalId = requestAnimationFrame(animate);
}

function showQuestion() {
    clockBox.classList.remove("active");
    questionBox.classList.add("active");

    const text = questions[Math.min(attempt, questions.length - 1)];
    questionText.textContent = text;
}

yesBtn.onclick = () => {
    questionBox.classList.remove("active");
    successBox.classList.add("active");
};

noBtn.onclick = () => {
    attempt++;
    startCountdown(5);
};

startCountdown(10);