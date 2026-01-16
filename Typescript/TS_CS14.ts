// Write a generic class FeedbackBox<T> that stores feedback items of any type and lets you retrieve them all.

class FeedbackBox<T>{
   
    private feedbacks : T[] = [];

    addFeedback(feedback:T):void{

        this.feedbacks.push(feedback);

    }

    getAllFeedbacks():T[]{
        return [...this.feedbacks]
    }

}


const quiz = new FeedbackBox<string>();

quiz.addFeedback("Easy Quiz");
quiz.addFeedback("Moderate Quiz");

  console.log(quiz.getAllFeedbacks());

  
  type lessonType = {
    rating:number,difficult:string
  }
const lesson = new FeedbackBox<lessonType>();

lesson.addFeedback({rating:4.5,difficult:"hard"});
console.log(lesson.getAllFeedbacks());



// Write a generic function getFirstItem<T> that returns the first item from any array.

function getFirstItem<T>(items:T[]):T{
    return items[0];
}


console.log(getFirstItem(["hello","hi","bye"]));
