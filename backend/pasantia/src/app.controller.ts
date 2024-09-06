import { Controller, Get, Post } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Post('random-number')
  getRandomNumer(): {value: number}{
    const value = this.appService.getRandomNumber(1, 100);
    return {value}
  }

}
