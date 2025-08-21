import { IsOptional, IsString } from 'class-validator';

export class UpdateServicesDto {
  @IsOptional()
  @IsString({ message: 'El id del servicio debe ser una cadena de texto.' })
  id?: string;

  @IsOptional()
  @IsString({ message: 'El codigo de servicio debe ser una cadena de texto.' })
  service_code?: string;

  @IsOptional()
  @IsString({
    message: 'La descripcion del servicio debe ser una cadena de texto.',
  })
  service_description?: string;
}
