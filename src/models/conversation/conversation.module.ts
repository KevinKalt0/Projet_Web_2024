import { Module } from '@nestjs/common';
import { ConversationsService } from './conversation.service';
import { ConversationsResolver } from './conversation.resolver';
import { UsersModule } from '../user/users.module';

@Module({
    imports: [UsersModule],
    providers: [ConversationsService, ConversationsResolver],
    exports: [ConversationsService],
})
export class ConversationsModule { }
