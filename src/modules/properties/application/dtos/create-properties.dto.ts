import { IsString, IsNotEmpty, IsNumber, IsOptional } from 'class-validator';

export class CreatePropertiesDto {
  @IsNotEmpty({ message: 'Nombre de la propiedad es requerido' })
  @IsString({
    message: 'El nombre de la propiedad debe ser una cadena de texto',
  })
  property_name: string;

  @IsNotEmpty({ message: 'Nombre del gerente es requerido' })
  @IsString({ message: 'El nombre del gerente debe ser una cadena de texto' })
  manager_name: string;

  @IsNotEmpty({ message: 'Apellido del gerente es requerido' })
  @IsString({ message: 'El apellido del gerente debe ser una cadena de texto' })
  last_name_mgr: string;

  @IsNotEmpty({ message: 'ID del cliente es requerido' })
  @IsString({ message: 'El ID del cliente debe ser una cadena de texto' })
  id_client: string;

  @IsNotEmpty({ message: 'Número de teléfono es requerido' })
  @IsNumber({}, { message: 'El número de teléfono debe ser un número' })
  phone: number;

  @IsNotEmpty({ message: 'Email es requerido' })
  @IsString({ message: 'El email debe ser una cadena de texto' })
  email: string;

  @IsString({ message: 'El email CC debe ser una cadena de texto' })
  @IsOptional()
  cc_email: string;

  @IsNotEmpty({ message: 'Address is required' })
  @IsString({ message: 'La dirección debe ser una cadena de texto' })
  address: string;

  @IsNotEmpty({ message: 'City is required' })
  @IsString({ message: 'La ciudad debe ser una cadena de texto' })
  city: string;

  @IsNotEmpty({ message: 'State is required' })
  @IsString({ message: 'El estado debe ser una cadena de texto' })
  state: string;

  @IsNotEmpty({ message: 'ZIP code is required' })
  @IsNumber({}, { message: 'El código postal debe ser un número' })
  zip: number;

  @IsNotEmpty({ message: 'Invoice processing is required' })
  @IsString({
    message: 'El procesamiento de facturas debe ser una cadena de texto',
  })
  invoice_processing: string;

  @IsNotEmpty({ message: 'Territory is required' })
  @IsString({ message: 'El territorio debe ser una cadena de texto' })
  territory: string;
}
