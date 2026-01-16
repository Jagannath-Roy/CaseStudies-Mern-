import {

    JsonController,
    Get,
    Post,
    Param,
    Body

} from "routing-controllers";

import { Order } from "./order.model"; 
import {orders,StoredOrder} from "./order.store";

@JsonController("/orders")
export class OrderController{
    
    @Get("/")
    getAllOrders(){
    return {status : "Succes",data:orders};
    }

    @Get("/:id")
    getOrderById(@Param("id")id:string){
        const order = orders.find(o =>id === o.id);

        if(!order){
            return {status : "error",error:"Order not found"}
        }
        return {status : "Succes",data:order};

    }


    @Post("/")
    createOrder(@Body({validate:true})order:Order){

            const newOrder : StoredOrder = {
                ...order,
                id : (orders.length+1).toString(),
                bakingStatus:"Pending"
            };
     orders.push(newOrder);
     return { status: "success", data: newOrder };
    }

}
