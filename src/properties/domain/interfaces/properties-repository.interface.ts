import { UpdatePropertiesDto } from '../../application/dtos/update-properties.dto';
//"src/properties/application/dtos/update-properties.dto"
import { Properties } from "../entities/properties"

export abstract class IPropertiesRepository {
    abstract create(properties: Properties): Promise<Properties | null>;
    abstract getAll(): Promise<Properties[]>;
    abstract getById(id: string): Promise<Properties | null>;
}

