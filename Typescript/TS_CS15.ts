// Create a type called InstructorOrAdmin that can be either an Instructor or an Admin.
  
type Instructor = { id: string; coursesTaught: number };
type Admin = { id: string; accessLevel: "basic" | "super" };

type InstructorOrAdmin = Instructor | Admin;



// Given a type Assignment = { title: string; dueDate: Date; points: number; }, create a type ReadonlyAssignment where none of the fields can be changed.

type Assignment = { title: string; dueDate: Date; points: number; }

type ReadonlyAssignment = Readonly<Assignment>;

// Given a type LearnerStats = { quizzes: number; videos: number; assignments: number; }, create a type StatsAsStrings that has the same keys, but all values are strings.

type LearnerStats = { quizzes: number; videos: number; assignments: number; }

type StatsAsStrings = {
    [K in keyof LearnerStats]:string
};