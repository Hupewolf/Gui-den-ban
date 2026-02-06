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
    "Tui thích bà. Làm người yêu tui nhe?",
    "Tui nghiêm túc đó… cho tui cơ hội nha?",
    "Lần này là thật luôn đó",
    "Pleaseee…"
];

function startCountdown(seconds) {
    clearInterval(intervalId);
    let timeLeft = seconds;

    countText.textContent = timeLeft;
    clockBox.classList.add("active");
    questionBox.classList.remove("active");
    successBox.classList.remove("active");

    intervalId = setInterval(() => {
        timeLeft--;
        countText.textContent = timeLeft;

        const angle = (timeLeft / seconds) * 360 - 90;
        secondHand.style.transform = `rotate(${angle}deg)`;

        if (timeLeft <= 0) {
            clearInterval(intervalId);
            showQuestion();
        }
    }, 1000);
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