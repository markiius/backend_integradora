// Update the import path if the file is located elsewhere, for example:
import { Client } from '../../domain/entities/client';
// Or, if the file is named 'Client.ts' or in a different folder, adjust accordingly.
// import { Client } from '../../domain/entities/Client';
// Make sure the file exists at the specified path.
// importa el tipo de Product desde prisma, y asigna un alias, ejemplo: PrismaProduct
import {
  Prisma,
  Client as PrismaClient,
} from '../../../../../generated/prisma';

export class ClientMapper {
  static toDomain(prismaClient: PrismaClient): Client {
    return new Client(
      prismaClient.id,
      prismaClient.name_company,
      prismaClient.name_manager,
      prismaClient.LastName_manager,
      prismaClient.phone,
      prismaClient.email,
      prismaClient.cc_email,
      prismaClient.address,
      prismaClient.city,
      prismaClient.state,
      prismaClient.zip_code,
      prismaClient.Procesamiento_factura,
      prismaClient.active,
    );
  }

  static toPersistence(client: Client): PrismaClient {
    return {
      id: client.id,
      name_company: client.name_company,
      name_manager: client.name_manager,
      LastName_manager: client.LastName_manager,
      phone: client.phone,
      email: client.email,
      cc_email: client.cc_email,
      address: client.address,
      city: client.city,
      state: client.state,
      zip_code: client.zip_code,
      Procesamiento_factura: client.Procesamiento_factura,
      active: client.active,
      createdAt: (client as any).createdAt ?? new Date(),
      updatedAt: (client as any).updatedAt ?? new Date(),
    };
  }
}
