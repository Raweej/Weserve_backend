import { Module } from '@nestjs/common';
import { OrdersService } from './orders.service';
import { OrdersController } from './orders.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Order } from './entities/order.entity';
import { User } from 'src/users/entities/user.entity';
import { Detail } from 'src/detail/entities/detail.entity';
import { UsersService } from 'src/users/users.service';
import { DetailService } from 'src/detail/detail.service';

@Module({
  imports: [TypeOrmModule.forFeature([Order, User, Detail])],
  controllers: [OrdersController],
  providers: [OrdersService, UsersService, DetailService],
  exports: [OrdersService],
})
export class OrdersModule {}
