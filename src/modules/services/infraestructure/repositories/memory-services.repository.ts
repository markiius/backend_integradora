import { Injectable } from '@nestjs/common';
import { IServicesRepository } from 'src/modules/services/domain/interfaces/services-repository.interface';
import { Services } from 'src/modules/services/domain/entities/services';

/**
 * Repositorio para servicios que usan memoria temporal
 */
@Injectable()
export class MemoryServicesRepository implements IServicesRepository {
  #services: Services[];

  constructor() {
    this.#services = [];
  }

  async create(services: Services): Promise<Services | null> {
    console.log(services);

    services.setId(`e-${this.#services.length + 1}`);
    this.#services.push(services);

    return services;
  }

  async getAll(): Promise<Services[]> {
    return this.#services;
  }

  async getById(id: string): Promise<Services | null> {
    return this.#services.find((item) => item.id === id) || null;
  }
}
