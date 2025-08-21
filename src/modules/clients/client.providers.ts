import { ClientRepository } from './infraestructure/repositories/prisma-clients.repository';

export const clientProviders = [
  {
    provide: 'CLIENT_REPOSITORY',
    useClass: ClientRepository,
  },
];
