import { Controller } from '@nestjs/common';
import { AppService } from './app.service';
import {
  Ctx,
  MessagePattern,
  Payload,
  RedisContext,
} from '@nestjs/microservices';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @MessagePattern('channel-one')
  handleChannel(@Payload() data: any, @Ctx() context: RedisContext) {
    console.log(`data: ${data} - context: ${JSON.stringify(context)}`);
  }

  @MessagePattern('message-two')
  handleMessage(@Payload() data: any, @Ctx() context: RedisContext) {
    console.log(`data: ${data} - context: ${JSON.stringify(context)}`);
  }
}
