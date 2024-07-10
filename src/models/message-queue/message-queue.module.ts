import { forwardRef, Module } from '@nestjs/common';
import { BullModule } from '@nestjs/bull';
import { MessageQueueService } from './message-queue.service';
import { MessageQueueProcessor } from '../message-queue/message-queue.processor';
import { MessagesModule } from '../message/message.module';

@Module({
  imports: [
    BullModule.registerQueue({
      name: 'message-queue',
    }),
    forwardRef(() => MessagesModule), // Utiliser forwardRef pour éviter les dépendances circulaires
  ],
  providers: [MessageQueueProcessor, MessageQueueService], // Fournir MessageQueueService
  exports: [MessageQueueService], // Exporter MessageQueueService
})
export class MessageQueueModule {}
