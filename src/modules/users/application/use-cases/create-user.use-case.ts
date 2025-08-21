import { Injectable } from '@nestjs/common';
import { IUserRepository } from '../../domain/interfaces/user-repository.interface';
import { CreateUserDto } from '../dtos/create-user.dto';
import { User } from '../../domain/entities/user';

@Injectable()
export class CreateUserUseCase {
  constructor(private readonly userRepository: IUserRepository) {}

  async execute(dto: CreateUserDto): Promise<User | null> {
    const userData = new User(
      '',
      dto.nombre,
      dto.apellido_paterno,
      dto.apellido_materno,
      dto.correo_electronico,
      dto.password,
      dto.activo,
    );

    return this.userRepository.create(userData);
  }
}
