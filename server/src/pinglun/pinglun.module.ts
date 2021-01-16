import { Module } from '@nestjs/common';
import { PinglunController } from './pinglun.controller';

@Module({
  controllers: [PinglunController]
})
export class PinglunModule {}
