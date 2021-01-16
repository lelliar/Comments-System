import { Global, Module } from '@nestjs/common';
import { DbService } from './db.service';
import { TypegooseModule } from 'nestjs-typegoose'
import { PingLun } from './models/pinglun.model';

const models = TypegooseModule.forFeature([PingLun])

@Global()
@Module({
  imports:[
    TypegooseModule.forRoot('mongodb://localhost/pinglun' , {
      useNewUrlParser:true,
      useUnifiedTopology:true,
      useFindAndModify:false,
      useCreateIndex:true
    }),
    models
  ],
  providers: [DbService],
  exports: [DbService , models],
})
export class DbModule {}
