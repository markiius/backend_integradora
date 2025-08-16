/*import { Test, TestingModule } from '@nestjs/testing';
import { ClientsController } from './clients.controller';

describe('ClientsController', () => {
  let controller: ClientsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ClientsController],
    }).compile();

    controller = module.get<ClientsController>(ClientsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
*/

import { Test, TestingModule } from '@nestjs/testing';
import { ClientsController } from './clients.controller';
import { GetClientsUseCase } from '../../application/use-cases/get-clients.use-case';
import { CreateClientUseCase } from '../../application/use-cases/create-client.use-case';

describe('ClientsController', () => {
  let controller: ClientsController;

  const getClientsUseCaseMock = {
    execute: jest.fn().mockResolvedValue([]),
  };
  const createClientUseCaseMock = {
    execute: jest.fn().mockResolvedValue({ id: 'c1' }),
  };

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ClientsController],
      providers: [
        { provide: GetClientsUseCase, useValue: getClientsUseCaseMock },
        { provide: CreateClientUseCase, useValue: createClientUseCaseMock },
      ],
    }).compile();

    controller = module.get<ClientsController>(ClientsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});