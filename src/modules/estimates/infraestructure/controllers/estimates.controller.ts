import {
  Body,
  Controller,
  Get,
  HttpCode,
  HttpStatus,
  Post,
} from '@nestjs/common';
import { CreateEstimateUseCase } from 'src/modules/estimates/application/use-cases/create-estimate.use-case';
import { CreateEstimateDto } from 'src/modules/estimates/application/dtos/create-estimate.dto';
import { GetEstimatesUseCase } from 'src/modules/estimates/application/use-cases/get-estimates.use-case';
import { Estimate } from '../../domain/entities/estimate';

@Controller('estimates')
export class EstimatesController {
  constructor(
    private readonly createEstimateUseCase: CreateEstimateUseCase,
    private readonly getEstimatesUseCase: GetEstimatesUseCase,
    // private readonly getEstimateByIdUseCase: GetEstimateByIdUseCase,
    // private readonly updateProductUseCase: UpdateProductUseCase,
    // private readonly deleteProductUseCase: DeleteProductUseCase,
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

  /*
  @Get(':id')
  @HttpCode(HttpStatus.OK)
  async findById(@Param('id') id: string): Promise<Product | null> {
    return this.getProductByIdUseCase.execute(id);
  }

  @Put(':id')
  @HttpCode(HttpStatus.OK)
  async update(
    @Param('id') id: string,
    @Body() updateProductDto: UpdateProductDto,
  ): Promise<Product> {
    return this.updateProductUseCase.execute(id, updateProductDto);
  }

  @Delete(':id')
  @HttpCode(HttpStatus.NO_CONTENT)
  async delete(@Param('id') id: string): Promise<void> {
    await this.deleteProductUseCase.execute(id);
  }

  */
}
