import { Injectable } from '@nestjs/common';
import { IAttachmentRepository } from '../../domain/interfaces/attachment-repository.interface';
import { CreateAttachmentDto } from '../dtos/create-attachment.dto';
import { Attachment } from '../../domain/entities/attachment';

@Injectable()
export class CreateAttachmentUseCase {
  constructor(private readonly attachmentRepository: IAttachmentRepository) {}

  async execute(dto: CreateAttachmentDto): Promise<Attachment | null> {
    const attachmentData = new Attachment('', dto.id_estimated, dto.url_link);

    return this.attachmentRepository.create(attachmentData);
  }
}
