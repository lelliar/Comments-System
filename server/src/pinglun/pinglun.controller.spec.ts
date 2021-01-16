import { Test, TestingModule } from '@nestjs/testing';
import { PinglunController } from './pinglun.controller';

describe('PinglunController', () => {
  let controller: PinglunController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PinglunController],
    }).compile();

    controller = module.get<PinglunController>(PinglunController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
