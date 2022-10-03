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
import { CreateDetailDto } from 'src/detail/dto/create-detail.dto';

@Controller('orders')
export class OrdersController {
  constructor(private readonly ordersService: OrdersService) {}

  @Post('/createOrder')
  async createOrder(@Body() createDetailDto: CreateDetailDto) {
    return await this.ordersService.createOrder(createDetailDto);
  }

  @Get()
  getOrders(): Promise<Order[]> {
    return this.ordersService.getOrders();
  }
}
