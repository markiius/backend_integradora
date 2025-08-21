import { Controller, Get, Module } from '@nestjs/common';
import { AppService } from './app.service';
import { GetClientsUseCase } from './modules/clients/application/use-cases/get-clients.use-case';
import { CreateClientUseCase } from './modules/clients/application/use-cases/create-client.use-case';
import { ClientRepository } from './modules/clients/domain/interfaces/client-repository.interface';
import { PrismaClientsRepository } from './modules/clients/infraestructure/repositories/prisma-clients.repository';
import { PrismaService } from './core/databases/prisma.service';
import { ClientsController } from './modules/clients/infraestructure/controllers/clients.controller';
import { ClientsModule } from './modules/clients/clients.module';

@Module({
  imports: [ClientsModule],
  controllers: [AppController, ClientsController],
  providers: [
    PrismaService,
    {
      provide: ClientRepository,
      useClass: PrismaClientsRepository, // Reemplazamos MemoryClientsRepository,
    },
    CreateClientUseCase,
    GetClientsUseCase,
    AppService,
  ],
})
@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
}
