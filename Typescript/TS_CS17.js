var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Content = /** @class */ (function () {
    function Content(title, author) {
        this.published = false;
        this.title = title;
        this.author = author;
    }
    Content.prototype.publish = function () {
        this.published = true;
    };
    Content.prototype.isPublished = function () {
        return this.published;
    };
    return Content;
}());
var Assignment = /** @class */ (function (_super) {
    __extends(Assignment, _super);
    function Assignment(title, author) {
        var _this = _super.call(this, title, author) || this;
        _this.dueDate = null;
        return _this;
    }
    Assignment.prototype.setDueDate = function (dueDate, isInstructor) {
        if (!this.isPublished() && isInstructor) {
            this.dueDate = dueDate;
        }
        else {
            throw new Error("Cannot set date");
        }
    };
    //Learners/admin can only view the dueDate
    Assignment.prototype.viewDueDate = function () {
        return this.dueDate;
    };
    Assignment.prototype.getType = function () {
        return "Assignment";
    };
    return Assignment;
}(Content));
var assignment = new Assignment("TypeScript oops", "Jagannath ROy");
assignment.setDueDate("2026-02-15", true);
assignment.publish();
//  assignment.setDueDate("2026-03-01", true);//This will throw an error since published is true now .
console.log("Assignment Type : ", assignment.getType());
console.log(assignment.viewDueDate());
