import { Injectable } from '@nestjs/common';
import { Conversation } from '../models/conversation/conversation';
import { User } from '../models/user/user';

@Injectable()
export class ConversationsService {
  private conversations: Conversation[] = [];

  findByUser(userId: string): Conversation[] {
    return this.conversations.filter(conversation =>
      conversation.participants.some(user => user.id === userId)
    );
  }

  findOne(id: string): Conversation | null {
    const conversation = this.conversations.find(
      conversation => conversation.id === id
    );
  
    if (!conversation) {
      return null; 
    }
  
    return conversation;
  }

  create(participants: User[]): Conversation {
    const conversation: Conversation = {
      id: Date.now().toString(),
      participants,
      createdAt: new Date(),
    };
    this.conversations.push(conversation);
    return conversation;
  }
}
