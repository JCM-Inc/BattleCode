import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CoreService } from './core.service';

@Module({
  providers: [CoreService],
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'root',
      password: '',
      database: 'battlecode_dev',
      entities: [],
      synchronize: true,
    }),
  ],
  exports: [CoreService],
})
export class CoreModule {}
