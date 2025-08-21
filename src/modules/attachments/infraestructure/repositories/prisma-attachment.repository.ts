import { Injectable } from '@nestjs/common';
import { IAttachmentRepository } from '../../domain/interfaces/attachment-repository.interface';
import { PrismaService } from 'src/core/databases/prisma.service';
import { Attachment } from '../../domain/entities/attachment';
import { AttachmentMapper } from '../mappers/attachment.mapper.ts';

@Injectable()
export class PrismaAttachmentsRepository implements IAttachmentRepository {
  constructor(private readonly prismaService: PrismaService) {}

  async create(attachment: Attachment): Promise<Attachment | null> {
    console.log(attachment);
    const newAttachment = await this.prismaService.attachment.create({
      data: {
        ...attachment,
        id: undefined,
      },
    });

    return AttachmentMapper.toDomain(newAttachment);
  }
}
