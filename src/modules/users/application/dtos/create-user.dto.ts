import { IsNotEmpty, IsString } from 'class-validator';

export class CreateUserDto {
  @IsNotEmpty({ message: 'El nombre es obligatorio.' })
  @IsString({ message: 'El nombre debe ser una cadena de texto.' })
  nombre: string;

  @IsNotEmpty({ message: 'El appelido paterno es obligatorio.' })
  @IsString({ message: 'El apellido paterno debe ser una cadena de texto.' })
  apellido_paterno: string;

  @IsNotEmpty({ message: 'el apellido materno es obligatoria.' })
  @IsString({ message: 'El apellido materno debe ser una cadena de texto.' })
  apellido_materno: string;

  @IsNotEmpty({ message: 'El correo electronico es obligatorio.' })
  @IsString({ message: 'El correo electronico debe ser una cadena de texto.' })
  correo_electronico: string;

  @IsNotEmpty({ message: 'El password es obligatorio.' })
  @IsString({ message: 'El correo electronico debe ser una cadena de texto.' })
  password: string;

  @IsNotEmpty({ message: 'El estatus activo es obligatorio.' })
  @IsString({ message: 'El campo activo debe ser una cadena de texto' })
  activo: string;
}
