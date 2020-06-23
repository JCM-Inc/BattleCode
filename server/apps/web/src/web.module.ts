import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { CoreService } from 'core/core';
import { WebController } from './web.controller';
import { WebService } from './web.service';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
  ],
  controllers: [WebController],
  providers: [CoreService, WebService],
})
export class WebModule {}
