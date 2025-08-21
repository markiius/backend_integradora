import { Module } from '@nestjs/common';
import { PropertiesController } from './infraestructure/controllers/properties.controller';
import { CreatePropertiesUseCase } from './application/use-cases/create-properties.use-case';
import { IPropertiesRepository } from './domain/interfaces/properties-repository.interface';
import { GetPropertiesUseCase } from './application/use-cases/get-properties.use-case';
//import { MemoryPropertiesRepository } from './infraestructure/repositories/memory-properties.repository';
import { PrismaPropertiesRepository } from './infraestructure/repositories/prisma-properties.repository';
import { PrismaService } from 'src/core/databases/prisma.service';

@Module({
  providers: [
    PrismaService,
    {
      provide: IPropertiesRepository,
      useClass: PrismaPropertiesRepository,
    },

    CreatePropertiesUseCase,
    GetPropertiesUseCase,
  ],
  controllers: [PropertiesController],
})
export class PropertiesModule {}
