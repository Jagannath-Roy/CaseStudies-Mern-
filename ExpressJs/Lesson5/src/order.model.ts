
import {IsString,IsInt,Min,IsDateString} from "class-validator";


export class Order{

    @IsString()
    customerName!:string;
    
    @IsString()
    flavor!:string;
   
    @IsInt()
    @Min(1)
    quantity!:number;

    @IsDateString()
    pickUpDate!:string;


}