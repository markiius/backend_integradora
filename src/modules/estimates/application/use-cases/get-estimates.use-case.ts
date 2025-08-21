import { Injectable } from '@nestjs/common';
import { Estimate } from 'src/modules/estimates/domain/entities/estimate';
import { IEstimateRepository } from 'src/modules/estimates/domain/interfaces/estimate-repository.interface';

@Injectable()
export class GetEstimatesUseCase {
  constructor(private readonly estimateRepository: IEstimateRepository) {}

  /**
   * Método para ejecutar el caso de uso
   * @param dto
   * @returns Estimado registrado o null
   */
  async execute(): Promise<Estimate[]> {
    // pedir los estimados al repositorio
    return this.estimateRepository.getAll();
  }
}
