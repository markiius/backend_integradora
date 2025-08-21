import { Injectable } from '@nestjs/common';
import { Properties } from 'src/modules/properties/domain/entities/properties';
import { IPropertiesRepository } from 'src/modules/properties/domain/interfaces/properties-repository.interface';

@Injectable()
export class GetPropertiesUseCase {
  constructor(private readonly propertiesRepository: IPropertiesRepository) {}

  async execute(): Promise<Properties[]> {
    return this.propertiesRepository.getAll();
  }
}
