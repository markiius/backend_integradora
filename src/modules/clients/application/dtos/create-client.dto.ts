/*import { IsBoolean, isBoolean, IsNotEmpty, IsNumber, IsOptional, IsString, Min } from "class-validator";

export class CreateClientDto {
  @IsNotEmpty({ message: 'El nombre de la compañia es obligatorio.' })
  @IsString({ message: 'El nombre debe ser una cadena de texto.' })
  name_company: string;

    @IsNotEmpty({ message: 'El nombre del manager es obligatorio.' })
  @IsString({ message: 'El nombre del manager debe ser una cadena de texto.' })
  name_manager: string;

      @IsNotEmpty({ message: 'El apellido del manager es obligatorio.' })
  @IsString({ message: 'El apellido del manager debe ser una cadena de texto.' })
  LastName_manager: string;

   @IsNotEmpty({ message: 'El telefono de contacto es obligatorio.' })
  @IsString({ message: 'El telefono debe ser una cadena de texto.' })
  phone: string;

  @IsNotEmpty({ message: 'El correo electronico es obligatorio.' })
  @IsString({ message: 'El correo electronico debe ser una cadena de texto.' })
  email: string;

   @IsOptional({ message: 'El correo electronico es obligatorio.' })
  @IsString({ message: 'El correo electronico debe ser una cadena de texto.' })
  cc_email: string;

  @IsNotEmpty({ message: 'La direccion es obligatoria.' })
  @IsString({ message: 'La direccion debe ser una cadena de texto.' })
  address: string;

  @IsNotEmpty({ message: 'La ciudad es obligatoria.' })
  @IsString({ message: 'La ciudad debe ser una cadena de texto.' })
  city: string;

  @IsNotEmpty({ message: 'El estado es obligatorio.' })
  @IsString({ message: 'El estado debe ser una cadena de texto.' })
  state: string;

  @IsNotEmpty({ message: 'El codigo postal es obligatorio.' })
  @IsString({ message: 'El codigo postal debe ser una cadena de texto.' })
  zip_code: string;

  @IsNotEmpty({ message: 'El metodo de procesamiento es obligatorio.' })
  @IsString({ message: 'El metodo de procesamiento debe ser una cadena de texto.' })
  Procesamiento_factura: string;

  @IsOptional({ message: 'El estado activo es opcional.' })
  @IsBoolean({ message: 'El estado activo debe ser un valor booleano.' })
  active?: boolean = true; // Por defecto, el cliente está activo    
}*/

import { IsBoolean, IsNotEmpty, IsOptional, IsString } from 'class-validator';

export class CreateClientDto {
  @IsNotEmpty({ message: 'El nombre de la compañia es obligatorio.' })
  @IsString({ message: 'El nombre debe ser una cadena de texto.' })
  name_company: string;

  @IsNotEmpty({ message: 'El nombre del manager es obligatorio.' })
  @IsString({ message: 'El nombre del manager debe ser una cadena de texto.' })
  name_manager: string;

  @IsNotEmpty({ message: 'El apellido del manager es obligatorio.' })
  @IsString({
    message: 'El apellido del manager debe ser una cadena de texto.',
  })
  LastName_manager: string;

  @IsNotEmpty({ message: 'El telefono de contacto es obligatorio.' })
  @IsString({ message: 'El telefono debe ser una cadena de texto.' })
  phone: string;

  @IsNotEmpty({ message: 'El correo electronico es obligatorio.' })
  @IsString({ message: 'El correo electronico debe ser una cadena de texto.' })
  email: string;

  @IsOptional()
  @IsString({
    message: 'El correo electronico copia debe ser una cadena de texto.',
  })
  cc_email: string;

  @IsNotEmpty({ message: 'La direccion es obligatoria.' })
  @IsString({ message: 'La direccion debe ser una cadena de texto.' })
  address: string;

  @IsNotEmpty({ message: 'La ciudad es obligatoria.' })
  @IsString({ message: 'La ciudad debe ser una cadena de texto.' })
  city: string;

  @IsNotEmpty({ message: 'El estado es obligatorio.' })
  @IsString({ message: 'El estado debe ser una cadena de texto.' })
  state: string;

  @IsNotEmpty({ message: 'El codigo postal es obligatorio.' })
  @IsString({ message: 'El codigo postal debe ser una cadena de texto.' })
  zip_code: string;

  @IsNotEmpty({ message: 'El metodo de procesamiento es obligatorio.' })
  @IsString({
    message: 'El metodo de procesamiento debe ser una cadena de texto.',
  })
  Procesamiento_factura: string;

  @IsOptional()
  @IsBoolean({ message: 'El estado activo debe ser un valor booleano.' })
  active?: boolean = true; // Por defecto, el cliente está activo
}
