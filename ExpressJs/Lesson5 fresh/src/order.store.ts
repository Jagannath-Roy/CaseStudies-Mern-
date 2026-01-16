import {Order} from "./order.model";

export interface StoredOrder extends Order{
     id:string;
     bakingStatus : "Pending" | "Baking" | "Ready";
   


}

export const orders : StoredOrder[] = [];