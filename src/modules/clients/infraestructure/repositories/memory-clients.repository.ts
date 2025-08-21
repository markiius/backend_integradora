/*import { Injectable } from "@nestjs/common";
import { ClientRepository } from "../../domain/interfaces/client-repository.interface";
import { Client } from "../../domain/entities/client";

/**
 * Repositorio para productos que usa memoria temporal
 
@Injectable()
export class MemoryClientsRepository implements ClientRepository {
  #clients: Client[];

  constructor() {
    this.#clients = [];
  }

  async create(client: Client): Promise<Client | null> {
  console.log(client);

    client.setId(`p-${this.#clients.length + 1}`);
    this.#clients.push(client);

    return client;
  }

  async getAll(): Promise<Client[]> {
    return this.#clients;
  }

  async getById(id: string): Promise<Client | null> {
    return this.#clients.find((item) => item.id === id) || null;
  }
}

export { ClientRepository };
*/

import { Injectable } from '@nestjs/common';
import { ClientRepository } from '../../domain/interfaces/client-repository.interface';
import { Client } from '../../domain/entities/client';

/**
 * Repositorio para clientes que usa memoria temporal
 */
@Injectable()
export class MemoryClientsRepository implements ClientRepository {
  #clients: Client[];

  constructor() {
    this.#clients = [];
  }

  async create(client: Client): Promise<Client | null> {
    console.log(client);

    client.setId(`c-${this.#clients.length + 1}`);
    this.#clients.push(client);

    return client;
  }

  async getAll(): Promise<Client[]> {
    return this.#clients;
  }

  async getById(id: string): Promise<Client | null> {
    return this.#clients.find((item) => item.id === id) || null;
  }
}
