import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DatabaseModule } from './infrastructure/database/database.module';
import { UserController } from './application/controllers/user.controller';
import { ConfigModule } from '@nestjs/config';
import dataSource from './infrastructure/database/data-source';
import { UserService } from './domain/user/user.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserEntity } from './infrastructure/models/user.model';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: `${process.cwd()}/.env.${process.env.NODE_ENV || 'development'}`,
      load: [dataSource],
    }),
    DatabaseModule,
    TypeOrmModule.forFeature([UserEntity])
  ],
  controllers: [AppController, UserController],
  providers: [AppService,UserService],
})
export class AppModule { }
