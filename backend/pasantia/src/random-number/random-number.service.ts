import { Injectable } from '@nestjs/common';

@Injectable()
export class RandomNumberService {

  private readonly min: number = 1;
  private readonly max: number = 100;

  getRandomNumber(): number{
    return Math.floor(Math.random() * (this.max - this.min + 1)) + this.min;
  }
}

