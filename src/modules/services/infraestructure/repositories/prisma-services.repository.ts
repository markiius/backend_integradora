import { Injectable } from '@nestjs/common';
import { IServicesRepository } from 'src/modules/services/domain/interfaces/services-repository.interface';
import { Services } from 'src/modules/services/domain/entities/services';
import { PrismaService } from 'src/core/databases/prisma.service';
import { ServicesMapper } from '../mappers/services.mapper';

/**
 * Repositorio para servicios que usa Prisma
 */
@Injectable()
export class PrismaServicesRepository implements IServicesRepository {
  constructor(private readonly prismaService: PrismaService) {}

  async create(Services: Services): Promise<Services | null> {
    const newServices = await this.prismaService.services.create({
      data: {
        ...Services,
        //id: undefined, // Allow Prisma to generate the ID if not provided
      },
    });

    return ServicesMapper.toDomain(newServices);
  }

  async getAll(): Promise<Services[]> {
    const Services = await this.prismaService.services.findMany();

    return Services.map(ServicesMapper.toDomain);
  }

  async getById(id: string): Promise<Services | null> {
    const Services = await this.prismaService.services.findUnique({
      where: {
        id,
      },
    });

    return Services ? ServicesMapper.toDomain(Services) : null;
  }
}
