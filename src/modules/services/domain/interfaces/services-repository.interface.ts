import { Services } from '../entities/services';

export abstract class IServicesRepository {
  abstract create(Services: Services): Promise<Services | null>;
  abstract getAll(): Promise<Services[]>;
  abstract getById(id: string): Promise<Services | null>;
}
