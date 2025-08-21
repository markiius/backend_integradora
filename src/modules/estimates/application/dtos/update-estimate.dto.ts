import {
  IsNumber,
  IsOptional,
  IsString,
  Min,
  IsDate,
  IsBoolean,
} from 'class-validator';

export class UpdateEstimateDto {
  @IsOptional()
  @IsString({ message: 'El id de la propiedad debe ser una cadena de texto.' })
  id_property?: string;

  @IsOptional()
  @IsString({ message: 'El número de estimado debe ser una cadena de texto.' })
  estimate_number?: string;

  @IsOptional()
  @IsDate({ message: 'La fecha de envío debe ser de tipo fecha.' })
  send_date?: Date;

  @IsOptional()
  @IsDate({ message: 'La fecha de expiración debe ser de tipo fecha.' })
  expiration_date?: Date;

  @IsOptional()
  @IsDate({ message: 'La fecha de aceptación debe ser de tipo fecha.' })
  acceptation_date?: Date;

  @IsOptional()
  @IsString({ message: 'El id del usuario debe ser una cadena de texto.' })
  id_user?: string;

  @IsOptional()
  @IsString({ message: 'El tipo de servicio debe ser una cadena de texto.' })
  service_type?: string;

  @IsOptional()
  @IsString({ message: 'La descripción debe ser una cadena de texto.' })
  description?: string;

  @IsOptional()
  @Min(0, { message: 'La cantidad debe ser mayor o igual a 0.' })
  quantity?: number;

  @IsOptional()
  @Min(0, { message: 'El monto debe ser mayor o igual a 0.' })
  amount?: number;

  @IsOptional()
  @IsBoolean({ message: 'El campo "tax_included" debe ser verdadero o falso.' })
  tax_included?: boolean;

  @IsOptional()
  @Min(0, { message: 'El campo "subtotal" debe ser mayor o igual a 0.' })
  subtotal?: number;

  @IsOptional()
  @Min(0, { message: 'El campo "tax_amount" debe ser mayor o igual a 0.' })
  tax_amount?: number;

  @IsOptional()
  @Min(0, { message: 'El campo "total" debe ser mayor o igual a 0.' })
  total?: number;
}
