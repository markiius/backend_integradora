import { Injectable } from '@nestjs/common';
import { ClientRepository } from '../../domain/interfaces/client-repository.interface';
import { Client } from '../../domain/entities/client';

import { PrismaService } from '../../../../core/databases/prisma.service';
import { ClientMapper } from '../mappers/client.mapper';

/**
 * Repositorio para productos que usa Prisma
 */
@Injectable()
export class PrismaClientsRepository implements ClientRepository {
  constructor(private readonly prismaService: PrismaService) {}

  async create(client: Client): Promise<Client | null> {
    const newClient = await this.prismaService.client.create({
      data: {
        ...client,
        id: undefined, // dejamos que Prisma genere su ID
      },
    });

    return ClientMapper.toDomain(newClient);
  }

  async getAll(): Promise<Client[]> {
    const clients = await this.prismaService.client.findMany();

    return clients.map(ClientMapper.toDomain);
  }

  async getById(id: string): Promise<Client | null> {
    const client = await this.prismaService.client.findUnique({
      where: {
        id,
      },
    });

    return client ? ClientMapper.toDomain(client) : null;
  }
}

export { ClientRepository };
