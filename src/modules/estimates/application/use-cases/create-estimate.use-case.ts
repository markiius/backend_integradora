import { Injectable } from "@nestjs/common";
import { Estimate } from "../../domain/entities/estimate";
import { IEstimateRepository } from "../../domain/interfaces/estimate-repository.interface";
import { CreateEstimateDto } from "../dtos/create-estimate.dto";

/**
 * Caso de uso para registrar un estimado
 */
@Injectable()
export class CreateEstimateUseCase {
  // requerir como provider el EstimateRepository
  constructor(private readonly estimateRepository: IEstimateRepository) {}
  /**
   * Método para ejecutar el caso de uso
   * @param dto 
   * @returns Estimado registrado o null
   */

  async execute(dto: CreateEstimateDto): Promise<Estimate | null> {
    // crear objeto de la entidad Estimate
    const estimateData = new Estimate(
      '', // la generación del Id la implementará el repositorio
      dto.id_property,
      dto.estimate_number,
      dto.send_date,
      dto.expiration_date,
      dto.acceptation_date,
      dto.id_user,
      dto.service_type,
      dto.description,
      dto.quantity,
      dto.amount,
      dto.tax_included,
      dto.subtotal,
      dto.tax_amount,
      dto.total
    );

    console.log(estimateData);

    // enviar a guardar el estimado a través del repositorio de estimados
    return this.estimateRepository.create(estimateData);

  }
}