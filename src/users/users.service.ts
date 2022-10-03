import { Injectable } from '@nestjs/common';
import { BadRequestException } from '@nestjs/common/exceptions';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateUserDto } from './dto/create-user.dto';
import { User } from './entities/user.entity';

@Injectable()
export class UsersService {
  constructor(@InjectRepository(User) private userRepo: Repository<User>) {}

  async createUser(createUserDto: CreateUserDto): Promise<User> {
    const { walletAddress, type } = createUserDto;
    console.log('wallet & type', walletAddress, type);
    try {
      const user = this.userRepo.create({
        walletAddress: walletAddress,
        type: type,
      });
      return await this.userRepo.save(user);
    } catch (error) {
      throw new BadRequestException(`Fail to create user error:${error}`);
    }
  }

  async getUsers(): Promise<User[]> {
    return await this.userRepo.find();
  }

  async cheackUserByAddress(address: string) {
    const userFound = await this.userRepo
      .createQueryBuilder('user')
      .where(`user.wallet_address = :address`, { address })
      .getOne();
    if (userFound) {
      return true;
    }
    return false;
  }

  getUserById(id: number) {
    return this.userRepo.find({ where: { id } });
  }
}
