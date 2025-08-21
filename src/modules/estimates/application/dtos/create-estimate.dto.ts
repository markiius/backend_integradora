import {
  IsNotEmpty,
  IsString,
  IsDate,
  IsBoolean,
  IsNumber,
  Min,
} from 'class-validator';

export class CreateEstimateDto {
  @IsNotEmpty({ message: 'El id de la propiedad es obligatorio.' })
  @IsString({ message: 'El id de la propiedad debe ser una cadena de texto.' })
  id_property: string;

  @IsNotEmpty({ message: 'El numero de estimado es obligatorio.' })
  @IsString({ message: 'El numero de estimado debe ser una cadena de texto.' })
  estimate_number: string;

  @IsNotEmpty({ message: 'La fecha de envío es obligatoria.' })
  @IsDate({ message: 'La fecha de envío debe ser una fecha válida.' })
  send_date: Date;

  @IsNotEmpty({ message: 'La fecha de expiración es obligatoria.' })
  @IsDate({ message: 'La fecha de expiración debe ser una fecha válida.' })
  expiration_date: Date;

  @IsNotEmpty({ message: 'La fecha de aceptación es obligatoria.' })
  @IsDate({ message: 'La fecha de aceptación debe ser una fecha válida.' })
  acceptation_date: Date;

  @IsNotEmpty({ message: 'El id del usuario es obligatorio.' })
  @IsString({ message: 'El id del usuario debe ser una cadena de texto.' })
  id_user: string;

  @IsNotEmpty({ message: 'El tipo de servicio es obligatorio.' })
  @IsString({ message: 'El tipo de servicio debe ser una cadena de texto.' })
  service_type: string;

  @IsNotEmpty({ message: 'La descripción es obligatoria.' })
  @IsString({ message: 'La descripción debe ser una cadena de texto.' })
  description: string;

  @IsNumber()
  @Min(0, { message: 'La cantidad debe ser mayor o igual a 0' })
  quantity: number;

  @IsNumber()
  @Min(0, { message: 'El monto debe ser mayor o igual a 0' })
  amount: number;

  @IsNotEmpty({ message: 'El campo "tax_included" es obligatorio.' })
  @IsBoolean({ message: 'El campo "tax_included" debe ser verdadero o falso.' })
  tax_included: boolean;

  @IsNotEmpty({ message: 'El campo "subtotal" es obligatorio.' })
  @IsNumber({}, { message: 'El campo "subtotal" debe ser un número.' })
  @Min(0, { message: 'El campo "subtotal" debe ser mayor o igual a 0.' })
  subtotal: number;

  @IsNotEmpty({ message: 'El campo "tax_amount" es obligatorio.' })
  @IsNumber({}, { message: 'El campo "tax_amount" debe ser un número.' })
  @Min(0, { message: 'El campo "tax_amount" debe ser mayor o igual a 0.' })
  tax_amount: number;

  @IsNotEmpty({ message: 'El campo "total" es obligatorio.' })
  @IsNumber({}, { message: 'El campo "total" debe ser un número.' })
  @Min(0, { message: 'El campo "total" debe ser mayor o igual a 0.' })
  total: number;
}
