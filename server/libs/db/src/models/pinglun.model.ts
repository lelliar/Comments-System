import { ApiProperty } from '@nestjs/swagger'
import { prop } from '@typegoose/typegoose'

export class PingLun{
    @ApiProperty({description:'内容'})
    @prop()
    content:string
}