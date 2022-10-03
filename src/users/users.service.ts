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
    const { walletAddress } = createUserDto;
    console.log('wallet', walletAddress);
    try {
      const user = this.userRepo.create();
      user.walletAddress = walletAddress;
      return await this.userRepo.save(user);
    } catch (error) {
      throw new BadRequestException(`Fail to create user error:${error}`);
    }
  }

  async getUsers(): Promise<User[]> {
    const users = await this.userRepo.find();
    return users;
  }

  getUserById(id: number) {
    return this.userRepo.find({ where: { id } });
  }
}
