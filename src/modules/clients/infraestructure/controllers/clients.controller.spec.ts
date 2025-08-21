import { Test, TestingModule } from '@nestjs/testing';
import { ClientsController } from './clients.controller';
import { CreateClientUseCase } from '../../application/use-cases/create-client.use-case';
import { GetClientsUseCase } from '../../application/use-cases/get-clients.use-case';

// Mock implementations
const mockCreateClientUseCase = {
  execute: jest.fn(),
};

const mockGetClientsUseCase = {
  execute: jest.fn(),
};

describe('ClientsController', () => {
  let controller: ClientsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ClientsController],
      providers: [
        {
          provide: CreateClientUseCase,
          useValue: mockCreateClientUseCase,
        },
        {
          provide: GetClientsUseCase,
          useValue: mockGetClientsUseCase,
        },
      ],
    }).compile();

    controller = module.get<ClientsController>(ClientsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
