import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateDetailDto } from './dto/create-detail.dto';
import { UpdateDetailDto } from './dto/update-detail.dto';
import { Detail } from './entities/detail.entity';

@Injectable()
export class DetailService {
  constructor(
    @InjectRepository(Detail)
    private detailRepo: Repository<Detail>,
  ) {}

  async createDetailOrder(createDetailDto: CreateDetailDto) {
    const { initAmount, finalAmount, tx } = createDetailDto;
    const createDetail = this.detailRepo.create({
      initAmount: initAmount,
      finalAmount: finalAmount,
      tx: tx,
    });
    return this.detailRepo.save(createDetail);
  }

  async getAllDetailOrder(): Promise<Detail[]> {
    const detailOrder = await this.detailRepo.find();
    return detailOrder;
  }

  async getDetails(): Promise<Detail[]> {
    return await this.detailRepo.find();
  }

  getDetailOrderById(id: number) {
    return this.detailRepo.find({ where: { id } });
  }
}
