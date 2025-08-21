import { Body, Controller, HttpCode, HttpStatus, Post } from '@nestjs/common';
import { CreateAttachmentUseCase } from '../../application/use-cases/create-attachment.use-case';
import { CreateAttachmentDto } from '../../application/dtos/create-attachment.dto';
import { Attachment } from '../../domain/entities/attachment';

@Controller('attachments')
export class AttachmentController {
  constructor(
    private readonly createAttachmentUseCase: CreateAttachmentUseCase,
  ) {}

  @Post()
  @HttpCode(HttpStatus.CREATED)
  async create(
    @Body() createAttachmentDto: CreateAttachmentDto,
  ): Promise<Attachment | null> {
    console.log(createAttachmentDto);
    return this.createAttachmentUseCase.execute(createAttachmentDto);
  }

  /*  @Get()
   @HttpCode(HttpStatus.OK)
   async findAll(): Promise<Product[]> {
     return this.getProductsUseCase.execute();
   } */

  /*
  @Get(':id')
  @HttpCode(HttpStatus.OK)
  async findById(@Param('id') id: string): Promise<Product | null> {
    return this.getProductByIdUseCase.execute(id);
  }

  @Put(':id')
  @HttpCode(HttpStatus.OK)
  async update(
    @Param('id') id: string,
    @Body() updateProductDto: UpdateProductDto,
  ): Promise<Product> {
    return this.updateProductUseCase.execute(id, updateProductDto);
  }

  @Delete(':id')
  @HttpCode(HttpStatus.NO_CONTENT)
  async delete(@Param('id') id: string): Promise<void> {
    await this.deleteProductUseCase.execute(id);
  }

  */
}
