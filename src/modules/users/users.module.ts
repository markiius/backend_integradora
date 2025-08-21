import { Module } from '@nestjs/common';
import { IUserRepository } from './domain/interfaces/user-repository.interface';
import { PrismaUsersRepository } from './infraestructure/repositories/prisma-user.repository';
import { CreateUserUseCase } from './application/use-cases/create-user.use-case';
import { UserController } from './infraestructure/controllers/user.controller';
import { PrismaService } from 'src/core/databases/prisma.service';

@Module({
  providers: [
    PrismaService,
    {
      provide: IUserRepository,
      useClass: PrismaUsersRepository,
    },
    CreateUserUseCase,
  ],
  controllers: [UserController],
})
export class UsersModule {}
