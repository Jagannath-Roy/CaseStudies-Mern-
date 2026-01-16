import "reflect-metadata";
import { createExpressServer } from "routing-controllers";
import { OrderController } from "./order.controller";
import { BakingController } from "./baking.controller";

const app = createExpressServer({
  controllers: [OrderController, BakingController],
});

app.listen(3000, () => {
  console.log("Bakery server running at http://localhost:3000");
});
