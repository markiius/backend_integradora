import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/core/databases/prisma.service';
import { User } from '../../domain/entities/user';
import { IUserRepository } from '../../domain/interfaces/user-repository.interface';
import { UserMapper } from '../mappers/user.mapper';

@Injectable()
export class PrismaUsersRepository implements IUserRepository {
  constructor(private readonly prismaService: PrismaService) {}

  async create(user: User): Promise<User | null> {
    const newUser = await this.prismaService.user.create({
      data: {
        ...user,
        id: undefined,
      },
    });

    return UserMapper.toDomain(newUser);
  }
}
