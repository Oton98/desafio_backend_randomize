import { Test, TestingModule } from '@nestjs/testing';
import { RandomNumberController } from './random-number.controller';
import { RandomNumberService } from './random-number.service';



describe('RandomNumberController', () => {
  let controller: RandomNumberController;
  let service: RandomNumberService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [RandomNumberController],
      providers: [RandomNumberService],
    }).compile();

    controller = module.get<RandomNumberController>(RandomNumberController);
    service = module.get<RandomNumberService>(RandomNumberService);
  });

  it('should return a random number and result', () => {
    jest.spyOn(service, 'getRandomNumber').mockReturnValue(60);

    const result = controller.getRandomNumber();
    expect(result).toEqual({ value: 60 });
  });
});