import {
  JsonController,
  Post,
  Get,
  Param,
  Body
} from "routing-controllers";
import { orders } from "./order.store";

@JsonController("/baking")
export class BakingController {

  @Post("/start")
  startBaking(@Body() body: { orderId: string }) {
    const order = orders.find(o => o.id === body.orderId);

    if (!order) {
      return { status: "error", error: "Order not found" };
    }

    if (order.bakingStatus !== "Pending") {
      return {
        status: "error",
        error: "Baking already started or completed"
      };
    }

    order.bakingStatus = "Baking";

    return {
      status: "success",
      message: "Baking started",
      data: order
    };
  }

  @Get("/status/:id")
  getBakingStatus(@Param("id") id: string) {
    const order = orders.find(o => o.id === id);

    if (!order) {
      return { status: "error", error: "Order not found" };
    }

    return {
      status: "success",
      data: {
        orderId: order.id,
        bakingStatus: order.bakingStatus
      }
    };
  }
}
