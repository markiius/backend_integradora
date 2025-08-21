import { User } from '../../domain/entities/user';
import { User as PrismaUser } from '../../../../../generated/prisma';

export class UserMapper {
  static toDomain(prismaUser: PrismaUser): User {
    return new User(
      prismaUser.id,
      prismaUser.nombre,
      prismaUser.apellido_paterno,
      prismaUser.apellido_materno,
      prismaUser.correo_electronico,
      prismaUser.password,
      prismaUser.activo,
    );
  }

  static toPersistence(user: User): PrismaUser {
    return {
      id: user.id,
      nombre: user.nombre,
      apellido_paterno: user.apellido_paterno,
      apellido_materno: user.apellido_materno,
      correo_electronico: user.correo_electronico,
      password: user.password,
      activo: user.activo,
    };
  }
}
