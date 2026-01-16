// 1. checkSign using if
function checkSign(num: number): void {
  if (num > 0) {
    console.log("The number is positive");
  }
}

// 2. evenOrOdd using if...else
function evenOrOdd(num: number): void {
  if (num % 2 === 0) {
    console.log("The number is even");
  } else {
    console.log("The number is odd");
  }
}

// 3. getGrade using if...else if...else ladder
function getGrade(score: number): string {
  if (score >= 90) {
    return "A";
  } else if (score >= 80) {
    return "B";
  } else if (score >= 70) {
    return "C";
  } else if (score >= 60) {
    return "D";
  } else {
    return "F";
  }
}

// 4. provideFeedback using switch
function provideFeedback(grade: string): void {
  switch (grade) {
    case "A":
      console.log("Excellent work!");
      break;
    case "B":
      console.log("Good job!");
      break;
    case "C":
      console.log("Fair performance.");
      break;
    case "D":
      console.log("Needs improvement.");
      break;
    case "F":
      console.log("Failed. Try harder next time.");
      break;
    default:
      console.log("Invalid grade.");
  }
}

// Example usage
checkSign(5);
evenOrOdd(7);

const grade = getGrade(85);
console.log("Grade:", grade);

provideFeedback(grade);
