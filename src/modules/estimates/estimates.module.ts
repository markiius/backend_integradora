import { Module } from '@nestjs/common';
import { EstimatesController } from './infraestructure/controllers/estimates.controller';
import { CreateEstimateUseCase } from './application/use-cases/create-estimate.use-case';
import { IEstimateRepository } from './domain/interfaces/estimate-repository.interface';
import { MemoryEstimatesRepository } from './infraestructure/repositories/memory-estimate.repository';
import { GetEstimatesUseCase } from './application/use-cases/get-estimates.use-case';

@Module({
  providers: [
    // proveedor de almacen, especificando la clase a utilizar
    {
      provide: IEstimateRepository,
      useClass: MemoryEstimatesRepository,
    },
    // casos de uso
    CreateEstimateUseCase,
    GetEstimatesUseCase,
  ],
  controllers: [EstimatesController],
})
export class EstimatesModule {}
