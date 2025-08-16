import { Injectable } from "@nestjs/common";
import { Properties } from '../../domain/entities/properties';
//"src/properties/domain/entities/properties";
import { IPropertiesRepository } from '../../domain/interfaces/properties-repository.interface';
//"src/properties/domain/interfaces/properties-repository.interface";

@Injectable()
export class GetPropertiesUseCase {
  constructor(private readonly propertiesRepository: IPropertiesRepository) {}

  async execute(): Promise<Properties[]> {
    return this.propertiesRepository.getAll();
  }
}   