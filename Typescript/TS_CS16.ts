interface Observer{
    update(message:string):void;
}


class Customer implements Observer{

    update(message: string): void {
        console.log("Customer Notified");
        
    }
}

class Inventory implements Observer{
     
    update(message: string): void {
        console.log("Inventory Notified");
        
    }
} 


class PromotionSystem implements Observer{
     update(message: string): void {
         console.log("Promotion System:",
      " Special Offer! Get 10% off your next drink!");
         
     }

}

class DrinkOrder{

    private observers :Observer[]=[];

    addObservers(observer:Observer){
        this.observers.push(observer);
    }

    notifyALL(message:string):void{
        this.observers.forEach(obs => obs.update(message))
    }

    completeOrder(){
        this.notifyALL("Drink is Ready!");
    }
    }

    const order = new DrinkOrder();

    order.addObservers(new Customer());
    order.addObservers(new Inventory());
    order.addObservers(new PromotionSystem());

    order.completeOrder();
    

    export {};