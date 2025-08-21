import {
  IsString,
  IsNotEmpty,
  IsNumber,
  IsOptional,
  isString,
} from 'class-validator';

export class UpdatePropertiesDto {
  @IsOptional()
  @IsString({
    message: 'El nombre de la propiedad debe ser una cadena de texto',
  })
  property_name?: string;

  @IsOptional()
  @IsString({ message: 'El nombre del gerente debe ser una cadena de texto' })
  manager_name?: string;

  @IsOptional()
  @IsString({ message: 'El apellido del gerente debe ser una cadena de texto' })
  last_name_mgr?: string;

  @IsOptional()
  @IsString({ message: 'El ID del cliente debe ser una cadena de texto' })
  id_client?: string;

  @IsOptional()
  @IsNumber({}, { message: 'El número de teléfono debe ser un número' })
  phone?: number;

  @IsOptional()
  @IsString({ message: 'El email debe ser una cadena de texto' })
  email?: string;

  @IsOptional()
  @IsString({ message: 'El email CC debe ser una cadena de texto' })
  email_cc?: string;

  @IsOptional()
  @IsString({ message: 'La dirección debe ser una cadena de texto' })
  address?: string;

  @IsOptional()
  @IsString({ message: 'La ciudad debe ser una cadena de texto' })
  city?: string;

  @IsOptional()
  @IsString({ message: 'El estado debe ser una cadena de texto' })
  state?: string;

  @IsOptional()
  @IsNumber({}, { message: 'El código postal debe ser un número' })
  zip?: number;

  @IsOptional()
  @IsString({
    message: 'El procesamiento de facturas debe ser una cadena de texto',
  })
  invoice_processing?: string;

  @IsOptional()
  @IsString({ message: 'El territorio debe ser una cadena de texto' })
  territory?: string;
}
