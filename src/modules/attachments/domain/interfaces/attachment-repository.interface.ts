import { Attachment } from '../entities/attachment';

export abstract class IAttachmentRepository {
  abstract create(attachment: Attachment): Promise<Attachment | null>;
}
