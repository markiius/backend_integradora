/*import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ClientsModule } from './modules/clients/clients.module';
import { ClientsController } from './modules/clients/infraestructure/controllers/clients.controller';
import { CreateClientUseCase } from './modules/clients/application/use-cases/create-client.use-case';
import { ClientRepository, IClientRepositoryToken } from './modules/clients/domain/interfaces/client-repository.interface';
import { GetClientsUseCase } from './modules/clients/application/use-cases/get-clients.use-case';
import { PrismaClientsRepository } from './modules/clients/infraestructure/repositories/prisma-clients.repository';
import { PrismaService } from './core/databases/prisma.service';
@Module({
  // Importamos el módulo de clientes

  imports: [ClientsModule],
  controllers: [AppController, ClientsController],
  providers: [CreateClientUseCase, GetClientsUseCase, AppService],
})
export class AppModule {}*/

import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ClientsModule } from './modules/clients/clients.module';

import { PropertiesModule } from './modules/properties/properties.module';
import { AttachmentsModule } from './modules/attachments/attachments.module';
import { EstimatesModule } from './modules/estimates/estimates.module';
import { UsersModule } from './modules/users/users.module';
import { ServicesModule } from './modules/services/services.module';

@Module({
  imports: [
    UsersModule,
    EstimatesModule,
    AttachmentsModule,
    PropertiesModule,
    ClientsModule,
    ServicesModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {
  // Este módulo es el punto de entrada de la aplicación NestJS
  // Aquí se importan los módulos necesarios y se configuran los controladores y servicios
  // El módulo EstimatesModule se encarga de la lógica relacionada con los estimados
}
