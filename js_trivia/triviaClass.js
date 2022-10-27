class TriviaQ {
    constructor(_parent, _item) {
        this.parent = _parent;
        this.q = _item.q;
        this.answers_ar = _item.answers;
        this.currentAnswer = _item.currentAnswer;
    }

    render() {
        let div = document.createElement("div");
        document.querySelector(this.parent).append(div);

        div.innerHTML = `
        <h2 class="display-6 mt-3 bold">${this.q}</h2>
        <div class="answers mx-auto">
        </div>
      `
        let answersDiv = div.querySelector(".answers");
        this.answers_ar.forEach((val, i) => {
            let btn = document.createElement("button");
            btn.className = "btn btn col-md-6 m-2 btnBox";
            btn.innerHTML = val;
            answersDiv.append(btn);
            btn.addEventListener("click", () => {
                if (i == this.currentAnswer) {
                    youCorrect();
                    updateScore(1);
                    nextQuestion();
                } else {
                    wrongCorrect();
                    nextQuestion();
                }
            })
        })

    }
}