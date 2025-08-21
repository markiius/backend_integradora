import { Injectable } from '@nestjs/common';
import { Services } from 'src/modules/services/domain/entities/services';
import { IServicesRepository } from 'src/modules/services/domain/interfaces/services-repository.interface';

@Injectable()
export class GetServicesUseCase {
  constructor(private readonly servicesRepository: IServicesRepository) {}

  /**
   * Método para ejecutar el caso de uso
   * @param dto
   * @returns Servicio registrado o null
   */
  async execute(): Promise<Services[]> {
    // pedir los servicios al repositorio
    return this.servicesRepository.getAll();
  }
}
