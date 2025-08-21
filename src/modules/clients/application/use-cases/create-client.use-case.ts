/*import { Inject, Injectable } from "@nestjs/common";
import { Client } from "../../domain/entities/client";
import { ClientRepository, IClientRepositoryToken } from "../../domain/interfaces/client-repository.interface";
import { CreateClientDto } from "../dtos/create-client.dto";
import { CLIENT_REPOSITORY } from "../../clients.constants";    


/**
 * Caso de uso para registrar clientes
 
@Injectable()
export class CreateClientUseCase{
  // requerir como provider el ClientRepository
  constructor(
    @Inject(CLIENT_REPOSITORY)
    private readonly ClientRepository: ClientRepository){}

  /**
   * Método para ejecutar el caso de uso
   * @param dto 
   * @returns Producto registrado o null
   
  async execute(dto: CreateClientDto): Promise<Client | null> {
    
    // crear objeto de la entidad Product
    const clientData = new Client(
      '', // la generación del Id la implementará el repositorio
      dto.name_company,
      dto.name_manager,
      dto.LastName_manager,
      dto.phone,
    dto.email,
        dto.cc_email ?? '',
        dto.address,
        dto.city,
        dto.state,
        dto.zip_code,
        dto.Procesamiento_factura,
        dto.active
    );
    console.log(clientData);
    

    // enviar a guardar el producto a través del repositorio de productos
    return this.ClientRepository.create(clientData);
  }
}*/

import { Injectable } from '@nestjs/common';
import { Client } from '../../domain/entities/client';
import { ClientRepository } from '../../domain/interfaces/client-repository.interface';
import { CreateClientDto } from '../dtos/create-client.dto';

@Injectable()
export class CreateClientUseCase {
  constructor(private readonly clientRepository: ClientRepository) {}

  /**
   * Método para ejecutar el caso de uso
   * @param dto
   * @returns Cliente registrado o null
   */

  async execute(dto: CreateClientDto): Promise<Client | null> {
    // crear objeto de la entidad Client
    const clientData = new Client(
      '', // la generación del Id la implementará el repositorio
      dto.name_company,
      dto.name_manager,
      dto.LastName_manager,
      dto.phone,
      dto.email,
      dto.cc_email,
      dto.address,
      dto.city,
      dto.state,
      dto.zip_code,
      dto.Procesamiento_factura,
      dto.active,
    );
    console.log(clientData);
    // enviar a guardar el cliente a través del repositorio de clientes
    return this.clientRepository.create(clientData);
  }
}
