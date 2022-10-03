import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { DetailService } from './detail.service';
import { CreateDetailDto } from './dto/create-detail.dto';
import { UpdateDetailDto } from './dto/update-detail.dto';

@Controller('detail')
export class DetailController {
  constructor(private readonly detailService: DetailService) {}

  @Post('/createDetailOrder')
  createDetailOrder(@Body() createDetailDto: CreateDetailDto) {
    return this.detailService.createDetailOrder(createDetailDto);
  }

  @Get()
  getDetails() {
    return this.detailService.getDetails();
  }

  @Get(':id')
  getDetailOrderById(@Param('id') id: string) {
    return this.detailService.getDetailOrderById(+id);
  }
}
