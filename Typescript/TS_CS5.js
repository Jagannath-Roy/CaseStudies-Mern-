var recordedAnswers = {}; //object declaration
function recordAnswer(questionId, answer) {
    recordedAnswers[questionId] = answer;
}
recordAnswer("Q1", "Yes");
recordAnswer("Q2", 5);
recordAnswer("Q3", false);
for (var q in recordedAnswers) {
    console.log(q + ":", recordedAnswers[q]);
}
