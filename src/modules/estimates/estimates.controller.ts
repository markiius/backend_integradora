/*import { Controller } from '@nestjs/common';

@Controller('estimates')
export class EstimatesController {}
*/

import {
  Body,
  Controller,
  Get,
  HttpCode,
  HttpStatus,
  Post,
} from '@nestjs/common';
import { CreateEstimateUseCase } from '../estimates/application/use-cases/create-estimate.use-case';
import { CreateEstimateDto } from '../estimates/application/dtos/create-estimate.dto';
import { Estimate } from '../estimates/domain/entities/estimate';
import { GetEstimatesUseCase } from '../estimates/application/use-cases/get-estimates.use-case';

@Controller('estimates')
export class EstimatesController {
  constructor(
    private readonly createEstimateUseCase: CreateEstimateUseCase,
    private readonly getEstimatesUseCase: GetEstimatesUseCase,
  ) {}

  @Post()
  @HttpCode(HttpStatus.CREATED)
  async create(
    @Body() createEstimateDto: CreateEstimateDto,
  ): Promise<Estimate | null> {
    console.log(createEstimateDto);

    return this.createEstimateUseCase.execute(createEstimateDto);
  }

  @Get()
  @HttpCode(HttpStatus.OK)
  async findAll(): Promise<Estimate[]> {
    return this.getEstimatesUseCase.execute();
  }
}
