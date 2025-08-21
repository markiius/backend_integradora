import { Attachment } from '../../domain/entities/attachment';
import { Attachment as PrismaAttachment } from 'generated/prisma';

export class AttachmentMapper {
  static toDomain(PrismaAttachment: PrismaAttachment): Attachment {
    return new Attachment(
      PrismaAttachment.id,
      PrismaAttachment.id_estimated,
      PrismaAttachment.url_link,
    );
  }

  static toPersistence(attachment: Attachment): PrismaAttachment {
    return {
      id: attachment.id,
      id_estimated: attachment.id_estimated,
      url_link: attachment.url_link,
    };
  }
}
