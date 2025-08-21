import { Injectable } from '@nestjs/common';
import { IEstimateRepository } from '../../domain/interfaces/estimate-repository.interface';
import { Estimate } from '../../domain/entities/estimate';
import { PrismaService } from '../../../../core/databases/prisma.service';
import { EstimateMapper } from '../mappers/estimate.mapper';

/**
 * Repositorio para estimaciones que usa Prisma
 */
@Injectable()
export class PrismaEstimatesRepository implements IEstimateRepository {
  constructor(private readonly prismaService: PrismaService) {}

  async create(estimate: Estimate): Promise<Estimate | null> {
    const newEstimate = await this.prismaService.estimate.create({
      data: {
        ...estimate,
        //id: undefined, // Allow Prisma to generate the ID if not provided
      },
    });

    return EstimateMapper.toDomain(newEstimate);
  }

  async getAll(): Promise<Estimate[]> {
    const estimates = await this.prismaService.estimate.findMany();

    return estimates.map(EstimateMapper.toDomain);
  }

  async getById(id: string): Promise<Estimate | null> {
    const estimate = await this.prismaService.estimate.findUnique({
      where: {
        id,
      },
    });

    return estimate ? EstimateMapper.toDomain(estimate) : null;
  }
}
