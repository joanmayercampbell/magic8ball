var answers = [];
answers[0] = "It is certain.";
answers[1] = "It is decidedly so.";
answers[2] = "Without a doubt.";
answers[3] = "Ask me again later.";
answers[4] = "I better not tell you.";
answers[5] = "My reply is no";
answers[6] = "Outlook is not so good.";
answers[7] = "Very doubtful.";
answers[8] = "Looking good for you!";
answers[9] = "I am hopeful for you."

function getAnswer() {

    var answer = document.getElementById("answer");

    var indexToAnswer = Math.floor((Math.random() * answers.length)) ;

    answer.innerHTML =  answers[indexToAnswer];
}