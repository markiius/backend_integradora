import { Module } from '@nestjs/common';
import { PrismaService } from 'src/core/databases/prisma.service';
import { IAttachmentRepository } from './domain/interfaces/attachment-repository.interface';
import { PrismaAttachmentsRepository } from './infraestructure/repositories/prisma-attachment.repository';
import { CreateAttachmentUseCase } from './application/use-cases/create-attachment.use-case';
import { AttachmentController } from './infraestructure/controllers/attachment.controller';

@Module({
  providers: [
    PrismaService,
    {
      provide: IAttachmentRepository,
      useClass: PrismaAttachmentsRepository,
    },
    CreateAttachmentUseCase,
  ],
  controllers: [AttachmentController],
})
export class AttachmentsModule {}
