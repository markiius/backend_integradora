import { Injectable } from "@nestjs/common";
import { Properties } from '../../domain/entities/properties';
//"src/properties/domain/entities/properties";
import { IPropertiesRepository } from '../../domain/interfaces/properties-repository.interface';
//"src/properties/domain/interfaces/properties-repository.interface";
import { CreatePropertiesDto } from '../../application/dtos/create-properties.dto';
//"src/properties/application/dtos/create-properties.dto";


@Injectable()
export class CreatePropertiesUseCase {
    //requerir como provider el propertiesRepository
  constructor(private readonly propertiesRepository: IPropertiesRepository) {}


  async  execute(dto: CreatePropertiesDto): Promise<Properties | null> {
    //crear objeto de la entidad Properties
    const newProperty = new Properties(
        '',
        dto.property_name,
        dto.manager_name,
        dto.last_name_mgr,
        dto.id_client,
        dto.phone,
        dto.email,
        dto.cc_email,
        dto.address,
        dto.city,
        dto.state,
        dto.zip,
        dto.invoice_processing,
        dto.territory
    );

    console.log('Creating new property:', newProperty);

    //enviar a guardar la propiedad a traves del repositorio de propiedades
    return this.propertiesRepository.create(newProperty);
  }
}