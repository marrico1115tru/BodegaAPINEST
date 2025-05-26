import { Test, TestingModule } from '@nestjs/testing';
import { CentroformacionService } from './centroformacion.service';

describe('CentroformacionService', () => {
  let service: CentroformacionService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CentroformacionService],
    }).compile();

    service = module.get<CentroformacionService>(CentroformacionService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
