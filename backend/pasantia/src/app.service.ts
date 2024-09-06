import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  //función para obtener un número random entre 1 y 100.
  getRandomNumber(min: number, max: number): number{
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
}
