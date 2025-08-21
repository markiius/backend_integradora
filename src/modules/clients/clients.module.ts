/*import { Module } from '@nestjs/common';
import { ClientsController } from './infraestructure/controllers/clients.controller';
import { CreateClientUseCase } from './application/use-cases/create-client.use-case';
import { ClientRepository } from './domain/interfaces/client-repository.interface';
import { GetClientsUseCase } from './application/use-cases/get-clients.use-case';
import { MemoryClientsRepository } from './infraestructure/repositories/memory-clients.repository';
import { PrismaClientsRepository } from './infraestructure/repositories/prisma-clients.repository';
import { PrismaService } from '../../core/databases/prisma.service';
import { CLIENT_REPOSITORY } from './clients.constants';
import { clientProviders } from './client.providers';

@Module({
  providers: [
    // agregamos PrismaService
      PrismaService,   // proveedor de almacen, especificando la clase a utilizar
    {
      provide: CLIENT_REPOSITORY,
      useClass: PrismaClientsRepository, 
    },
    CreateClientUseCase,
    GetClientsUseCase
  ],
  controllers: [ClientsController]
})*/

import { Module } from '@nestjs/common';
import { ClientsController } from './infraestructure/controllers/clients.controller';
import { CreateClientUseCase } from './application/use-cases/create-client.use-case';
import { ClientRepository } from './domain/interfaces/client-repository.interface';
import { MemoryClientsRepository } from './infraestructure/repositories/memory-clients.repository';
import { GetClientsUseCase } from './application/use-cases/get-clients.use-case';

@Module({
  providers: [
    // proveedor de almacen, especificando la clase a utilizar
    {
      provide: ClientRepository,
      useClass: MemoryClientsRepository, // Repositorio en memoria
    },
    // casos de uso
    CreateClientUseCase,
    GetClientsUseCase,
  ],
  controllers: [ClientsController],
})
export class ClientsModule {}
