import {
  Body,
  Controller,
  Get,
  HttpCode,
  HttpStatus,
  Post,
} from '@nestjs/common';
import { CreateServicesUseCase } from 'src/modules/services/application/use-cases/create-services.use-case';
import { CreateServicesDto } from 'src/modules/services/application/dtos/create-services.dto';
import { GetServicesUseCase } from 'src/modules/services/application/use-cases/get-services.use-case';
import { Services } from 'src/modules/services/domain/entities/services';

@Controller('services')
export class ServicesController {
  constructor(
    private readonly createServicesUseCase: CreateServicesUseCase,
    private readonly getServicesUseCase: GetServicesUseCase,
    // private readonly getEstimateByIdUseCase: GetEstimateByIdUseCase,
    // private readonly updateProductUseCase: UpdateProductUseCase,
    // private readonly deleteProductUseCase: DeleteProductUseCase,
  ) {}

  @Post()
  @HttpCode(HttpStatus.CREATED)
  async create(
    @Body() CreateServicesDto: CreateServicesDto,
  ): Promise<Services | null> {
    console.log(CreateServicesDto);

    return this.createServicesUseCase.execute(CreateServicesDto);
  }

  @Get()
  @HttpCode(HttpStatus.OK)
  async findAll(): Promise<Services[]> {
    return this.getServicesUseCase.execute();
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
