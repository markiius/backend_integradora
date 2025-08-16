/*import { Test, TestingModule } from '@nestjs/testing';
import { EstimatesController } from './estimates.controller';

describe('EstimatesController', () => {
  let controller: EstimatesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [EstimatesController],
    }).compile();

    controller = module.get<EstimatesController>(EstimatesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});*/

import { Test, TestingModule } from '@nestjs/testing';
import { EstimatesController } from './estimates.controller';
import { CreateEstimateUseCase } from './application/use-cases/create-estimate.use-case';
import { GetEstimatesUseCase } from './application/use-cases/get-estimates.use-case';

describe('EstimatesController', () => {
  let controller: EstimatesController;

  const createEstimateUseCaseMock = {
    execute: jest.fn().mockResolvedValue({ id: 'e1' }),
  };
  const getEstimatesUseCaseMock = {
    execute: jest.fn().mockResolvedValue([]),
  };

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [EstimatesController],
      providers: [
        { provide: CreateEstimateUseCase, useValue: createEstimateUseCaseMock },
        { provide: GetEstimatesUseCase, useValue: getEstimatesUseCaseMock },
      ],
    }).compile();

    controller = module.get<EstimatesController>(EstimatesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
