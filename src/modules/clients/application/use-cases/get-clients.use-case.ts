/*import { Injectable } from "@nestjs/common";
import { Client } from "../../domain/entities/client";
import { ClientRepository } from "../../domain/interfaces/client-repository.interface";

/**
 * Caso de uso para listar todos los productos
 
@Injectable()
export class GetClientsUseCase{
   constructor(private readonly clientRepository: ClientRepository){}

  /**
   * Método para ejecutar el caso de uso
   * @param dto 
   * @returns Producto registrado o null
   
  async execute(): Promise<Client[]> {
    
    // pedir los productos al repositorio
    return this.clientRepository.getAll();
  }
}*/

import { Injectable } from '@nestjs/common';
import { Client } from '../../domain/entities/client';
import { ClientRepository } from '../../domain/interfaces/client-repository.interface';
/**
 * Caso de uso para listar todos los clientes
 */
@Injectable()
export class GetClientsUseCase {
  constructor(private readonly clientRepository: ClientRepository) {}

  /**
   * Método para ejecutar el caso de uso
   * @param dto
   * @returns Lista de clientes
   */
  async execute(): Promise<Client[]> {
    // pedir los clientes al repositorio
    return this.clientRepository.getAll();
  }
}
