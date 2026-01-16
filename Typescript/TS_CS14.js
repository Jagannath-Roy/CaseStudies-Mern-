// Write a generic class FeedbackBox<T> that stores feedback items of any type and lets you retrieve them all.
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var FeedbackBox = /** @class */ (function () {
    function FeedbackBox() {
        this.feedbacks = [];
    }
    FeedbackBox.prototype.addFeedback = function (feedback) {
        this.feedbacks.push(feedback);
    };
    FeedbackBox.prototype.getAllFeedbacks = function () {
        return __spreadArray([], this.feedbacks, true);
    };
    return FeedbackBox;
}());
var quiz = new FeedbackBox();
quiz.addFeedback("Easy Quiz");
quiz.addFeedback("Moderate Quiz");
console.log(quiz.getAllFeedbacks());
var lesson = new FeedbackBox();
lesson.addFeedback({ rating: 4.5, difficult: "hard" });
console.log(lesson.getAllFeedbacks());
// Write a generic function getFirstItem<T> that returns the first item from any array.
function getFirstItem(items) {
    return items[0];
}
console.log(getFirstItem(["hello", "hi", "bye"]));
