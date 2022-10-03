import { ConfigModule, ConfigService } from '@nestjs/config';
import {
  TypeOrmModuleAsyncOptions,
  TypeOrmModuleOptions,
} from '@nestjs/typeorm';

export default class TypeOrmConfig {
  static getOrmConfig(configservice: ConfigService): TypeOrmModuleOptions {
    console.log('process.env.DB_HOST', process.env.DB_HOST);
    console.log('process.env.DB_USERNAME', process.env.DB_USERNAME);
    console.log('process.env.DB_PASSWORD', process.env.DB_PASSWORD);
    console.log('process.env.DB_DATABASE', process.env.DB_DATABASE);
    console.log('process.env.NEST_SYNCHRONIZE', process.env.NEST_SYNCHRONIZE);

    return {
      type: 'postgres',
      host: process.env.DB_HOST,
      port: Number(process.env.DB_PORT),
      username: process.env.DB_USERNAME,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_DATABASE,
      entities: [__dirname + '/../**/*.entity.{js,ts}'],
      synchronize: Boolean(process.env.NEST_SYNCHRONIZE),
    };
  }
}

export const TypeOrmConfigAsync: TypeOrmModuleAsyncOptions = {
  imports: [ConfigModule],
  inject: [ConfigService],
  useFactory: async (
    configService: ConfigService,
  ): Promise<TypeOrmModuleOptions> => TypeOrmConfig.getOrmConfig(configService),
};
