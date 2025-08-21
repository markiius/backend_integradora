import { Injectable } from '@nestjs/common';
import { IEstimateRepository } from 'src/modules/estimates/domain/interfaces/estimate-repository.interface';
import { Estimate } from 'src/modules/estimates/domain/entities/estimate';
/**
 * Repositorio para estimados que usa memoria temporal
 */
@Injectable()
export class MemoryEstimatesRepository implements IEstimateRepository {
  #estimates: Estimate[];

  constructor() {
    this.#estimates = [];
  }

  async create(estimate: Estimate): Promise<Estimate | null> {
    console.log(estimate);

    estimate.setId(`e-${this.#estimates.length + 1}`);
    this.#estimates.push(estimate);

    return estimate;
  }

  async getAll(): Promise<Estimate[]> {
    return this.#estimates;
  }

  async getById(id: string): Promise<Estimate | null> {
    return this.#estimates.find((item) => item.id === id) || null;
  }
}
