(function () {
    let Question = function (question, arr , answer){
        this.question = question;
        this.arr = arr;
        this.answer = answer;
        this.isUserAnswerCorrect = function (isUserAnswerCorrect) {
            if (answer === isUserAnswerCorrect) {
                count++;
                console.log("Your are right. Your score - " + count);
            }
        else console.log("No, try again . Your score - " + count);
        }
        this.printQuestion = function () {
            console.log(question);
            for(let i=0; i < arr.length; i++ ){
                console.log(i + 1 + '. ' + arr[i]);
            }
        }
    }

    function nextQuestion() {
        return arrQuestion[Math.round(Math.random()*(arrQuestion.length - 1))];
    }

    let arrQuestion = [];
    let count = 0;

    arrQuestion.push( new Question("What is the name of best developer ?", ["John", "Jay", "Artem"], "3"));
    arrQuestion.push( new Question("Who will be the President of Ukraine ?", ["Zelenskiy", "Timoshenko", "Poroshenko"], "1"));
    arrQuestion.push( new Question("What is the Best country ?", ["USA","Ukraine","Germany", "Spain", "Canada"], "5"));

    while (true){
        let question = nextQuestion();
        question.printQuestion();
        let userAnswer = prompt("Please enter answer");
        if ( userAnswer === 'exit') break;
        else question.isUserAnswerCorrect(userAnswer);
    }

})();


