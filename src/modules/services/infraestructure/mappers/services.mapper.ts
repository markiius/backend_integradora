import { Services } from 'src/modules/services/domain/entities/services';
import {
  Prisma,
  Services as prismaServices,
} from '../../../../../generated/prisma';

export class ServicesMapper {
  static toDomain(prismaServices: prismaServices): Services {
    return new Services(
      prismaServices.id,
      prismaServices.service_code,
      prismaServices.service_description,
    );
  }

  static toPersistence(services: Services): prismaServices {
    return {
      id: services.id,
      service_code: services.service_code,
      service_description: services.service_description,
    };
  }
}
