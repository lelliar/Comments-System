import { DbModule } from '@libs/db';
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PinglunModule } from './pinglun/pinglun.module';

@Module({
  imports: [
    DbModule,
    PinglunModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
