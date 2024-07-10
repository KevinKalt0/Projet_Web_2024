import { forwardRef, Module } from '@nestjs/common';
import { MessagesService } from './message.service';
import { MessagesResolver } from './message.resolver';
import { UsersModule } from '../user/users.module'; // Importer UsersModule
import { ConversationsModule } from '../conversation/conversation.module';
import { MessageQueueModule } from '../message-queue/message-queue.module';

@Module({
    imports: [
      UsersModule,
      ConversationsModule,
      forwardRef(() => MessageQueueModule),
    ],
    providers: [MessagesService, MessagesResolver],
    exports: [MessagesService],
  })
  export class MessagesModule {}
