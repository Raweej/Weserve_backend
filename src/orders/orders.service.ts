import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from 'src/users/entities/user.entity';
import { Repository } from 'typeorm';
import { Order } from './entities/order.entity';

@Injectable()
export class OrdersService {
  constructor(
    @InjectRepository(Order)
    private orderRepo: Repository<Order>,

    @InjectRepository(User)
    private userRepo: Repository<User>,
  ) {}

  async createOrder(walletAddress: string): Promise<Order> {
    const userFound = await this.userRepo
      .createQueryBuilder('user')
      .where(`user.wallet_address = :walletAddress`, { walletAddress })
      .getOne();
    console.log('userFound', userFound);
    try {
      const createOrder = this.orderRepo.create();
      createOrder.user_id = userFound;
      console.log('createOrder', createOrder);
      return await this.orderRepo.save(createOrder);
    } catch (error) {
      throw new BadRequestException(`Fail to create order error:${error}`);
    }
  }

  async getOrders(): Promise<Order[]> {
    const orders = await this.orderRepo.find();
    console.log('order', orders);
    return orders;
  }
}
