import { Test, TestingModule } from '@nestjs/testing';
import { RandomNumberService } from './random-number.service';



describe('RandomNumberService', () => {
  let service: RandomNumberService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [RandomNumberService],
    }).compile();

    service = module.get<RandomNumberService>(RandomNumberService);
  });

  it('should generate a number within the range', () => {
    const min = 1;
    const max = 100;
    const randomNumber = service.getRandomNumber();
    
    expect(randomNumber).toBeGreaterThanOrEqual(min);
    expect(randomNumber).toBeLessThanOrEqual(max);
  });
});