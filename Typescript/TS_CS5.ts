
let recordedAnswers: { [key: string]: any } = {}; //object declaration


function recordAnswer(questionId: string, answer: any): void {
    recordedAnswers[questionId] = answer;
}


recordAnswer("Q1", "Yes");                     
recordAnswer("Q2", 5);                         
recordAnswer("Q3", false);  


for (let q in recordedAnswers) {
    console.log(q + ":", recordedAnswers[q]);
}
