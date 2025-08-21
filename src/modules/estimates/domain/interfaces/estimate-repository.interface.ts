import { Estimate } from '../entities/estimate';

export abstract class IEstimateRepository {
  abstract create(estimate: Estimate): Promise<Estimate | null>;
  abstract getAll(): Promise<Estimate[]>;
  abstract getById(id: string): Promise<Estimate | null>;
}
