import { Injectable } from '@nestjs/common';
import { IPropertiesRepository } from 'src/modules/properties/domain/interfaces/properties-repository.interface';
import { Properties } from 'src/modules/properties/domain/entities/properties';

/**
 * repositorio para propiedades que usa memoria temporal
 */

@Injectable()
export class MemoryPropertiesRepository implements IPropertiesRepository {
  #properties: Properties[];

  constructor() {
    this.#properties = [];
  }

  async create(properties: Properties): Promise<Properties | null> {
    console.log(properties);

    properties.setId(`p-${this.#properties.length + 1}`); // Genera un ID único basado en el índice
    console.log('Generated ID:', properties.id);
    this.#properties.push(properties);

    return properties;
  }

  async getAll(): Promise<Properties[]> {
    return this.#properties;
  }

  async getById(id: string): Promise<Properties | null> {
    return this.#properties.find((prop) => prop.id === id) || null;
  }
}
