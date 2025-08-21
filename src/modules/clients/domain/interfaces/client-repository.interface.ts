/*import { Injectable } from "@nestjs/common";
import { Client } from "../entities/client";
// or adjust the path to the correct file location, e.g.:
// import { Client } from "../../entities/client";
// Definición de token para la interfaz
export const IClientRepositoryToken = 'IClientRepository';

// Implementación concreta
@Injectable()
export abstract class ClientRepository {
  abstract create(client: Client): Promise<Client | null>;
  abstract getAll(): Promise<Client[]>;
  abstract getById(id: string): Promise<Client | null>;
}

import { Module } from "@nestjs/common";
import { PrismaClientsRepository } from "../../infraestructure/repositories/prisma-clients.repository";
// If the correct folder is 'infrastructure', update the path as follows:
// Update the path below to the correct location of prisma.module.ts
// Example: If the correct path is '../../infraestructure/prisma/prisma.module'

@Module({
  providers: [
    {
      provide: ClientRepository,
      useClass: PrismaClientsRepository, // Reemplazar con la implementación concreta
    },
  ],
  exports: [ClientRepository], // Exportar el repositorio para que pueda ser utilizado en otros módulos
}
)export class ClientRepositoryModule {}*/
import { Client } from '../entities/client';
export abstract class ClientRepository {
  abstract create(client: Client): Promise<Client | null>;
  abstract getAll(): Promise<Client[]>;
  abstract getById(id: string): Promise<Client | null>;
}
