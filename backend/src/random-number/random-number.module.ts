import { Module, MiddlewareConsumer } from '@nestjs/common';
import { RandomNumberController } from './random-number.controller';
import { RandomNumberService } from './random-number.service';
import { TimestampMiddleware } from 'src/middleware/timestamp.middleware';

@Module({
  controllers: [RandomNumberController],
  providers: [RandomNumberService],
})

export class RandomNumberModule {
  configure(consumer: MiddlewareConsumer){
    consumer
    .apply(TimestampMiddleware)
    .forRoutes(RandomNumberController)
  }
}