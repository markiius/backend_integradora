/*import { IsNumber, IsOptional, IsString, Min } from "class-validator";


export class CreateClientDto {
  @IsOptional({ message: 'El nombre de la compañia es obligatorio.' })
  @IsString({ message: 'El nombre debe ser una cadena de texto.' })
  name_company: string;

  @IsOptional({ message: 'El nombre del manager es obligatorio.' })
  @IsString({ message: 'El nombre del manager debe ser una cadena de texto.' })
  name_manager: string;

   @IsOptional({ message: 'El telefono de contacto es obligatorio.' })
  @IsString({ message: 'El telefono debe ser una cadena de texto.' })
  phone: string;

  @IsOptional({ message: 'El correo electronico es obligatorio.' })
  @IsString({ message: 'El correo electronico debe ser una cadena de texto.' })
  email: string;

  @IsOptional({ message: 'La direccion es obligatoria.' })
  @IsString({ message: 'La direccion debe ser una cadena de texto.' })
  address: string;

  @IsOptional({ message: 'La ciudad es obligatoria.' })
  @IsString({ message: 'La ciudad debe ser una cadena de texto.' })
  city: string;

  @IsOptional({ message: 'El estado es obligatorio.' })
  @IsString({ message: 'El estado debe ser una cadena de texto.' })
  state: string;

  @IsOptional({ message: 'El codigo postal es obligatorio.' })
  @IsString({ message: 'El codigo postal debe ser una cadena de texto.' })
  zip_code: string;

  @IsOptional({ message: 'El metodo de procesamiento es obligatorio.' })
  @IsString({ message: 'El metodo de procesamiento debe ser una cadena de texto.' })
  Procesamiento_factura: string;

}*/

import { IsBoolean, IsNotEmpty, IsOptional, IsString } from 'class-validator';
export class UpdateClientDto {
  @IsOptional({ message: 'El nombre de la compañia es obligatorio.' })
  @IsString({ message: 'El nombre debe ser una cadena de texto.' })
  name_company?: string;

  @IsOptional({ message: 'El nombre del manager es obligatorio.' })
  @IsString({ message: 'El nombre del manager debe ser una cadena de texto.' })
  name_manager?: string;

  @IsOptional({ message: 'El apellido del manager es obligatorio.' })
  @IsString({
    message: 'El apellido del manager debe ser una cadena de texto.',
  })
  LastName_manager?: string;

  @IsOptional({ message: 'El telefono de contacto es obligatorio.' })
  @IsString({ message: 'El telefono debe ser una cadena de texto.' })
  phone?: string;

  @IsOptional({ message: 'El correo electronico es obligatorio.' })
  @IsString({ message: 'El correo electronico debe ser una cadena de texto.' })
  email?: string;

  @IsOptional({ message: 'El correo electronico es opcional.' })
  @IsString({ message: 'El correo electronico debe ser una cadena de texto.' })
  cc_email?: string;

  @IsOptional({ message: 'La direccion es obligatoria.' })
  @IsString({ message: 'La direccion debe ser una cadena de texto.' })
  address?: string;

  @IsOptional({ message: 'La ciudad es obligatoria.' })
  @IsString({ message: 'La ciudad debe ser una cadena de texto.' })
  city?: string;

  @IsOptional({ message: 'El estado es obligatorio.' })
  @IsString({ message: 'El estado debe ser una cadena de texto.' })
  state?: string;

  @IsOptional({ message: 'El codigo postal es obligatorio.' })
  @IsString({ message: 'El codigo postal debe ser una cadena de texto.' })
  zip_code?: string;

  @IsOptional({ message: 'El metodo de procesamiento es obligatorio.' })
  @IsString({
    message: 'El metodo de procesamiento debe ser una cadena de texto.',
  })
  Procesamiento_factura?: string;

  @IsOptional()
  @IsBoolean()
  active?: boolean;
}
