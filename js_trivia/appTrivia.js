let counter;
let score;

window.onload = () => {
    resetApp();
}

const resetApp = () => {
    counter = 0;
    score = 0;
    updateScore()
    nextQuestion();
}

const nextQuestion = () => {
    document.querySelector("#id_parent").innerHTML = "";
    let currentQuestionItem = q_json_ar[counter];
    let triviaQ = new TriviaQ("#id_parent", currentQuestionItem)
    triviaQ.render();
    if (counter >= q_json_ar.length - 1) {
        alert("Game over your score is: " + score);
        if (score > 4) {
            winner();
            return;
        } else {
            looser();
            return;
        }
    }
    counter++;

}

function updateScore(_val = 0) {
    score += _val;
    document.querySelector("#id_score").innerHTML = `(${score}/8)`;
}

function youCorrect(_val = 0) {
    score += _val;
    document.querySelector("#id_you").innerHTML = `Correct Answer`;
    document.querySelector("#id_you").style.color = `Green`;
}

function wrongCorrect(_val = 0) {
    score += _val;
    document.querySelector("#id_you").innerHTML = `Nice try!!`;
    document.querySelector("#id_you").style.color = `Red`;
}

function winner(_val = 0) {
    score += _val;
    document.querySelector("#id_you").className = `border border-success`;
    document.querySelector("#id_you").innerHTML = `YOU WINNER!!`;
    document.querySelector("#id_you").style.color = `Green`;
}

function looser(_val = 0) {
    score += _val;
    document.querySelector("#id_you").className = `border border-danger`;
    document.querySelector("#id_you").innerHTML = `YOU LOOSER!!`;
    document.querySelector("#id_you").style.color = `Red`;
}