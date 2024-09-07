import { Controller, Post } from '@nestjs/common';
import { RandomNumberService } from './random-number.service';
import { RandomNumberResponse } from './random-number.response';

@Controller('random-number') 
export class RandomNumberController {
  constructor(private readonly randomNumberService: RandomNumberService) {}

  @Post()
  getRandomNumber(): RandomNumberResponse {
    const value = this.randomNumberService.getRandomNumber();
    return {value}
  }

}
