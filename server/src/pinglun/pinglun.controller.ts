import { PingLun } from '@libs/db/models/pinglun.model';
import { Controller } from '@nestjs/common';
import { InjectModel } from 'nestjs-typegoose';
import { Crud } from 'nestjs-mongoose-crud'

@Crud({
    model:PingLun
})
@Controller('pinglun')
export class PinglunController {
    constructor(@InjectModel(PingLun) private readonly model){}
}
