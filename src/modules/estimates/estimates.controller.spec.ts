import { Test, TestingModule } from '@nestjs/testing';
import { EstimatesController } from './estimates.controller';
import { CreateEstimateUseCase } from './application/use-cases/create-estimate.use-case';
import { GetEstimatesUseCase } from './application/use-cases/get-estimates.use-case';

describe('EstimatesController', () => {
  let controller: EstimatesController;

  const CreateEstimateUseCaseMock = {
    execute: jest.fn().mockResolvedValue({ id: 'e1' }),
  };

  const GetEstimatesUseCaseMock = {
    execute: jest.fn().mockResolvedValue([]),
  };

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [EstimatesController],
      providers: [
        { provide: CreateEstimateUseCase, useValue: CreateEstimateUseCaseMock },
        { provide: GetEstimatesUseCase, useValue: GetEstimatesUseCaseMock },
      ],
    }).compile();

    controller = module.get<EstimatesController>(EstimatesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
