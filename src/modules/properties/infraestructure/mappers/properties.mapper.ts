import { Properties } from 'src/modules/properties/domain/entities/properties';
import {
  Prisma,
  Properties as PrismaProperties,
} from '../../../../../generated/prisma';

export class PropertiesMapper {
  static toDomain(PrismaProperties: PrismaProperties): Properties {
    return new Properties(
      PrismaProperties.id,
      PrismaProperties.property_name,
      PrismaProperties.manager_name,
      PrismaProperties.last_name_mgr,
      PrismaProperties.id_client,
      PrismaProperties.phone,
      PrismaProperties.email,
      PrismaProperties.cc_email,
      PrismaProperties.address,
      PrismaProperties.city,
      PrismaProperties.state,
      PrismaProperties.zip,
      PrismaProperties.invoice_processing,
      PrismaProperties.territory,
    );
  }

  static toPersistence(
    properties: Properties,
  ): Prisma.PropertiesUncheckedCreateInput {
    return {
      id: properties.id,
      property_name: properties.property_name,
      manager_name: properties.manager_name,
      last_name_mgr: properties.last_name_mgr,
      id_client: properties.id_client,
      phone: properties.phone,
      email: properties.email,
      cc_email: properties.cc_email,
      address: properties.address,
      city: properties.city,
      state: properties.state,
      zip: properties.zip,
      invoice_processing: properties.invoice_processing,
      territory: properties.territory,
    };
  }
}
