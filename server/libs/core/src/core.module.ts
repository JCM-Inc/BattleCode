import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CoreService } from './core.service';

@Module({
  providers: [CoreService],
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: process.env.DB_HOST || 'localhost',
      port: Number.parseInt(process.env.DB_PORT) || 5432,
      username: process.env.DB_USER || 'root',
      password: process.env.DB_PASS || '',
      database: process.env.DB_NAME || 'battlecode_dev',
      entities: [],
      synchronize: true,
    }),
  ],
  exports: [CoreService],
})
export class CoreModule {}
