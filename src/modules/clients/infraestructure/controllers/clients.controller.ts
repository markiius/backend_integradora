/*import { Body, Controller, Get, HttpCode, HttpStatus, Post } from '@nestjs/common';
import { CreateClientUseCase } from '../../application/use-cases/create-client.use-case';
import { CreateClientDto } from '../../application/dtos/create-client.dto';
import { Client } from '../../domain/entities/client';
import { GetClientsUseCase } from '../../application/use-cases/get-clients.use-case';

@Controller('clients')
export class ClientsController {

  constructor(
    private readonly getClientsUseCase: GetClientsUseCase,
    // Inyectamos el caso de uso para crear clientes
    private readonly createClientUseCase: CreateClientUseCase,
    // Inyectamos el repositorio de clientes
    // private readonly clientsRepository: MemoryClientsRepository, // Repositorio en memoria
    // private readonly clientsRepository: PrismaClientsRepository, // Repositorio con Prisma
    // Repositorio con Prisma
    // private readonly clientsRepository: IClienttRepository, // Interfaz del repositorio
    // Repositorio con Prisma
    private readonly get: GetClientsUseCase,
    // private readonly getProductByIdUseCase: GetProductByIdUseCase,
    // private readonly updateProductUseCase: UpdateProductUseCase,
    // private readonly deleteProductUseCase: DeleteProductUseCase,
  ) {}

  @Post()
  @HttpCode(HttpStatus.CREATED)
  async create(@Body() createClientDto: CreateClientDto): Promise<Client | null> {
    console.log(createClientDto);
    
    return this.createClientUseCase.execute(createClientDto);
  }

  @Get()
  @HttpCode(HttpStatus.OK)
  async findAll(): Promise<Client[]> {
    return this.getClientsUseCase.execute();
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

  

}*/

import {
  Body,
  Controller,
  Get,
  HttpCode,
  HttpStatus,
  Post,
} from '@nestjs/common';
import { CreateClientUseCase } from '../../application/use-cases/create-client.use-case';
import { CreateClientDto } from '../../application/dtos/create-client.dto';
import { Client } from '../../domain/entities/client';
import { GetClientsUseCase } from '../../application/use-cases/get-clients.use-case';
@Controller('clients')
export class ClientsController {
  constructor(
    private readonly getClientsUseCase: GetClientsUseCase,
    // Inyectamos el caso de uso para crear clientes
    private readonly createClientUseCase: CreateClientUseCase,
  ) {}

  @Post()
  @HttpCode(HttpStatus.CREATED)
  async create(
    @Body() createClientDto: CreateClientDto,
  ): Promise<Client | null> {
    console.log(createClientDto);

    return this.createClientUseCase.execute(createClientDto);
  }

  @Get()
  @HttpCode(HttpStatus.OK)
  async findAll(): Promise<Client[]> {
    return this.getClientsUseCase.execute();
  }
}
