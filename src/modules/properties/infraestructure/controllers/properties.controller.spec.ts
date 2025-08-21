import { Test, TestingModule } from '@nestjs/testing';
import { PropertiesController } from './properties.controller';
import { CreatePropertiesUseCase } from '../../application/use-cases/create-properties.use-case';
import { GetPropertiesUseCase } from '../../application/use-cases/get-properties.use-case';

describe('PropertiesController', () => {
  let controller: PropertiesController;

  const CreatePropertiesUseCaseMock = {
    execute: jest.fn().mockResolvedValue({ id: 'p1' }),
  };

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PropertiesController],
      providers: [
        {
          provide: CreatePropertiesUseCase,
          useValue: CreatePropertiesUseCaseMock,
        },
        {
          provide: GetPropertiesUseCase,
          useValue: { execute: jest.fn().mockResolvedValue([]) },
        },
      ],
    }).compile();

    controller = module.get<PropertiesController>(PropertiesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
