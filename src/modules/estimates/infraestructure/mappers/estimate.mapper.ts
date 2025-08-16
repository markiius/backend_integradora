import { Estimate } from '../../domain/entities/estimate';
import { Prisma, Estimate as prismaEstimate } from 'generated/prisma';

export class EstimateMapper {
  static toDomain(prismaEstimate: prismaEstimate): Estimate {
    return new Estimate(
      prismaEstimate.id,
      prismaEstimate.id_property,
      prismaEstimate.estimate_number,
      prismaEstimate.send_date,
      prismaEstimate.expiration_date,
      prismaEstimate.acceptation_date,
      prismaEstimate.id_user,
      prismaEstimate.service_type,
      prismaEstimate.description,
      prismaEstimate.quantity.toNumber(),
      prismaEstimate.amount.toNumber(),
      prismaEstimate.tax_included,
      prismaEstimate.subtotal.toNumber(),
      prismaEstimate.tax_amount.toNumber(),
      prismaEstimate.total.toNumber(),
    );
  }

  static toPersistence(estimate: Estimate): prismaEstimate {
    return {
      id: estimate.id,
      id_property: estimate.id_property,
      estimate_number: estimate.estimate_number,
      send_date: estimate.send_date,
      expiration_date: estimate.expiration_date,
      acceptation_date: estimate.acceptation_date,
      id_user: estimate.id_user,
      service_type: estimate.service_type,
      description: estimate.description,
      quantity: new Prisma.Decimal(estimate.quantity),
      amount: new Prisma.Decimal(estimate.amount),
      tax_included: estimate.tax_included,
      subtotal: new Prisma.Decimal(estimate.subtotal),
      tax_amount: new Prisma.Decimal(estimate.tax_amount),
      total: new Prisma.Decimal(estimate.total)
    };
  }
}