abstract class Content{
    public readonly title :string;
    public readonly author : string;

    private published : boolean = false;

    constructor(title:string,author:string){
        this.title = title;
        this.author = author;

    }

    public publish():void{
        this.published = true;

    }

    protected isPublished():boolean{
        return this.published;
    }

    abstract getType():string;


}


class Assignment extends Content{

    private dueDate : string | null =  null;

    constructor(title:string,author:string){
        super(title,author);

    }
   

    setDueDate(dueDate:string , isInstructor:boolean){
        if(!this.isPublished() && isInstructor){
            this.dueDate = dueDate;
        }
        else{
            throw new Error("Cannot set date");
        }
        
    }
    
   //Learners/admin can only view the dueDate
    public viewDueDate():string | null{
        return this.dueDate;
    }

    getType():string{
        return "Assignment";
    }
}


const assignment =  new Assignment("TypeScript oops","Jagannath ROy");

assignment.setDueDate("2026-02-15",true);
 assignment.publish();

//  assignment.setDueDate("2026-03-01", true);//This will throw an error since published is true now .

 console.log("Assignment Type : ",assignment.getType());

 console.log(assignment.viewDueDate());
 
 export {};