/*import { Test, TestingModule } from '@nestjs/testing';
import { PropertiesController } from './properties.controller';

describe('PropertiesController', () => {
  let controller: PropertiesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PropertiesController],
    }).compile();

    controller = module.get<PropertiesController>(PropertiesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});*/

import { Test, TestingModule } from '@nestjs/testing';
import { PropertiesController } from './properties.controller';
import { CreatePropertiesUseCase } from '../../application/use-cases/create-properties.use-case';
import { GetPropertiesUseCase } from '../../application/use-cases/get-properties.use-case';

describe('PropertiesController', () => {
  let controller: PropertiesController;

  const createPropertiesUseCaseMock = {
    execute: jest.fn().mockResolvedValue({ id: 'p1' }),
  };
  const getPropertiesUseCaseMock = {
    execute: jest.fn().mockResolvedValue([]),
  };

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PropertiesController],
      providers: [
        { provide: CreatePropertiesUseCase, useValue: createPropertiesUseCaseMock },
        { provide: GetPropertiesUseCase, useValue: getPropertiesUseCaseMock },
      ],
    }).compile();

    controller = module.get<PropertiesController>(PropertiesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
