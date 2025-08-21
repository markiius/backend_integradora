import { IsNotEmpty, IsString } from 'class-validator';

export class CreateAttachmentDto {
  @IsNotEmpty({ message: 'El id_estimated es obligatorio.' })
  @IsString({ message: 'El id_estimated debe ser una cadena de texto.' })
  id_estimated: string;

  @IsNotEmpty({ message: 'El url_link es obligatorio.' })
  @IsString({ message: 'El url_link debe ser una cadena de texto.' })
  url_link: string;
}
