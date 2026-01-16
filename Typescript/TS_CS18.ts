interface PaymentGateway {
   processPayment(amount:number):Promise<boolean>;

}


class StripeGateway implements PaymentGateway{
     
    async processPayment(amount: number): Promise<boolean> {
        console.log(`Processing Payment of ${amount} via stripe`);  
        return true;

        
    }
}

class PayPalGateway implements PaymentGateway{

    async processPayment(amount: number): Promise<boolean> {
        console.log(`Processing Payment of ${amount} via PayPal`);  
        return true;

        
    }

}

class FailingMockGateway implements PaymentGateway{
     
    async processPayment(amount: number): Promise<boolean> {
    console.log(`Mock processing payment of $${amount}`);
    return false; // simulate failure
  }
}



class PaymentProcessor{

   constructor(private gateway:PaymentGateway){};

   async pay(amount:number):Promise<void>{
    const success = await this.gateway.processPayment(amount);

    if(success){
        console.log("Payment Successfull");
        
    }
    else{
        console.log("Payment Failed. Try again");
        
    }
   }

}


async function runDemo() {
    console.log("\n--- Stripe Payment ---");
  const stripeProcessor = new PaymentProcessor(new StripeGateway());
  await stripeProcessor.pay(100);

  console.log("\n--- Pay Pal Payment ---");
  const bankProcessor = new PaymentProcessor(new PayPalGateway());
  await bankProcessor.pay(250);

  console.log("\n--- Failing Mock Payment (Testing) ---");
  const failingProcessor = new PaymentProcessor(new FailingMockGateway());
  await failingProcessor.pay(50);


    
}
runDemo();