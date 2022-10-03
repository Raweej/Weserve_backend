import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { OrdersService } from './orders.service';
import { CreateOrderDto } from './dto/create-order.dto';
import { UpdateOrderDto } from './dto/update-order.dto';
import { Order } from './entities/order.entity';

@Controller('orders')
export class OrdersController {
  constructor(private readonly ordersService: OrdersService) {}

  @Post()
  async createOrder(@Body('walletAddress') walletAddress: string) {
    return await this.ordersService.createOrder(walletAddress);
  }

  @Get()
  getOrders(): Promise<Order[]> {
    return this.ordersService.getOrders();
  }
}
