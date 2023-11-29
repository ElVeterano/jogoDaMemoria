
const emojis = [
    "🐶",
    "🐶",
    "🐱",
    "🐱",
    "🐺",
    "🐺",
    "🦁",
    "🦁",
    "🐯",
    "🐯",
    "🦊",
    "🦊",
    "🦝",
    "🦝",
    "🐷",
    "🐷"
];
let openCards = [];

let shuffleEmojis = emojis.sort(() => (Math.random() > 0.5 ? 2 : -1));

for(let i = 0; i < emojis.length; i++) {
    let box = document.createElement("div");
    box.className = "item";
    box.innerHTML = shuffleEmojis[i];
    box.onclick = handleClick;
    document.querySelector(".game").appendChild(box);
}

function handleClick () {
    if (openCards.length < 2) {
        this.classList.add("boxOpen");  
        openCards.push(this);
    }

    if (openCards.length == 2) {
        setTimeout(checkMatch, 500);
    }
}

function checkMatch() {
    if (openCards[0].innerHTML == openCards[1].innerHTML) {
        openCards[0].classList.add("boxMatch");
        openCards[1].classList.add("boxMatch");
    } else {
        openCards[0].classList.remove("boxOpen");
        openCards[1].classList.remove("boxOpen");
    }

    openCards = []; /* zerando vetor */

    if (document.querySelectorAll(".boxMatch").length === emojis.length) {
        alert ("Você Venceu!");
    }
}

function timer (timer) {
    let time = 60;
    const intervalId = setInterval (function() {
        if (time <= 0) {
            clearInterval(intervalId);
            alert("Você ficou sem tempo!");
            setInterval(window.location.reload(), 2000);
        } 
        else {
        timer.textContent = `00:${time}`;
        time--;
        }   
    }, 1000);
}

timer(document.querySelector(".timer"));