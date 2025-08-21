import { Injectable } from '@nestjs/common';
import { IPropertiesRepository } from 'src/modules/properties/domain/interfaces/properties-repository.interface';
import { Properties } from 'src/modules/properties/domain/entities/properties';
import { PrismaService } from 'src/core/databases/prisma.service';
import { PropertiesMapper } from '../mappers/properties.mapper';

@Injectable()
export class PrismaPropertiesRepository implements IPropertiesRepository {
  constructor(private readonly prismaService: PrismaService) {}

  async create(properties: Properties): Promise<Properties | null> {
    const newProperties = await this.prismaService.properties.create({
      data: {
        ...properties,
        id: undefined, // dejamos que Prisma genere su ID
      },
    });

    return PropertiesMapper.toDomain(newProperties);
  }

  async getAll(): Promise<Properties[]> {
    const properties = await this.prismaService.properties.findMany();

    return properties.map(PropertiesMapper.toDomain);
  }

  async getById(id: string): Promise<Properties | null> {
    const properties = await this.prismaService.properties.findUnique({
      where: {
        id,
      },
    });

    return properties ? PropertiesMapper.toDomain(properties) : null;
  }
}
