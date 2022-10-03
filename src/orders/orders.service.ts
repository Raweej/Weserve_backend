import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { DetailService } from 'src/detail/detail.service';
import { CreateDetailDto } from 'src/detail/dto/create-detail.dto';
import { User } from 'src/users/entities/user.entity';
import { Repository } from 'typeorm';
import { CreateOrderDto } from './dto/create-order.dto';
import { Order } from './entities/order.entity';

@Injectable()
export class OrdersService {
  constructor(
    @InjectRepository(Order)
    private orderRepo: Repository<Order>,

    @InjectRepository(User)
    private userRepo: Repository<User>,

    private detailService: DetailService,
  ) {}

  async createOrder(createDetailDto: CreateDetailDto) {
    const { walletAddress } = createDetailDto;
    const userFound = await this.userRepo
      .createQueryBuilder('user')
      .where(`user.wallet_address = :walletAddress`, { walletAddress })
      .getOne();
    // console.log('userFound', userFound);
    try {
      const createDetail = await this.detailService.createDetailOrder(
        createDetailDto,
      );
      const createOrder = this.orderRepo.create({
        user_id: userFound,
        detail: createDetail,
      });

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
