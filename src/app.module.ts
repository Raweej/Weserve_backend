import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';

import { ConfigModule } from '@nestjs/config';
import { ScheduleModule } from '@nestjs/schedule';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TypeOrmConfigAsync } from './config/typeorm.config';
import { UsersModule } from './users/users.module';
import { OrdersModule } from './orders/orders.module';
import { DetailModule } from './detail/detail.module';

@Module({
  imports: [
    ScheduleModule.forRoot(),
    ConfigModule.forRoot(),
    TypeOrmModule.forRootAsync(TypeOrmConfigAsync),
    UsersModule,
    OrdersModule,
    DetailModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
