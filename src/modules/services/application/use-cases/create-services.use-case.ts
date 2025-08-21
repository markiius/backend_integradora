import { Injectable } from '@nestjs/common';
import { Services } from 'src/modules/services/domain/entities/services';
import { IServicesRepository } from 'src/modules/services/domain/interfaces/services-repository.interface';
import { CreateServicesDto } from '../dtos/create-services.dto';

/**
 * Caso de uso para registrar un estimado
 */
@Injectable()
export class CreateServicesUseCase {
  // requerir como provider el ServicesRepository
  constructor(private readonly serviceseRepository: IServicesRepository) {}
  /**
   * Método para ejecutar el caso de uso
   * @param dto
   * @returns Servicio registrado o null
   */

  async execute(dto: CreateServicesDto): Promise<Services | null> {
    // crear objeto de la entidad Services
    const ServicesData = new Services(
      '', // la generación del Id la implementará el repositorio
      dto.service_code,
      dto.service_description,
    );

    console.log(ServicesData);

    // enviar a guardar el estimado a través del repositorio de estimados
    return this.serviceseRepository.create(ServicesData);
  }
}
