import { Body, Controller, Get, HttpCode, HttpStatus, Post } from "@nestjs/common";
import { CreatePropertiesUseCase } from '../../application/use-cases/create-properties.use-case';
//"src/properties/application/use-cases/create-properties.use-case";
import { CreatePropertiesDto } from '../../application/dtos/create-properties.dto';
//"src/properties/application/dtos/create-properties.dto";
import { Properties } from "src/properties/domain/entities/properties";
import { GetPropertiesUseCase } from '../../application/use-cases/get-properties.use-case';
//"src/properties/application/use-cases/get-properties.use-case";

@Controller('properties')
export class PropertiesController {

constructor(
    private readonly createPropertiesUseCase: CreatePropertiesUseCase,
    private readonly getPropertiesUseCase: GetPropertiesUseCase
) {}

@Post()
@HttpCode(HttpStatus.CREATED)
async create(@Body() CreatePropertiesDto: CreatePropertiesDto): Promise<Properties | null> {
    console.log(CreatePropertiesDto);

    return this.createPropertiesUseCase.execute(CreatePropertiesDto);
}

@Get()
@HttpCode(HttpStatus.OK)
async findAll(): Promise<Properties[]> {
    return this.getPropertiesUseCase.execute();

}

}
