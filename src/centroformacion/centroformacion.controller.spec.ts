import { Test, TestingModule } from '@nestjs/testing';
import { CentroformacionController } from './centroformacion.controller';

describe('CentroformacionController', () => {
  let controller: CentroformacionController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CentroformacionController],
    }).compile();

    controller = module.get<CentroformacionController>(CentroformacionController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
