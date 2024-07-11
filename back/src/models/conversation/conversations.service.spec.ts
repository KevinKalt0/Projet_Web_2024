import { Test, TestingModule } from '@nestjs/testing';
import { ConversationsService } from './conversation.service';
import { User } from '../user/user';
import { describe, beforeEach, it } from 'node:test';
//import { Conversation } from '../conversation/conversation';

describe('ConversationsService', () => {
  let service: ConversationsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ConversationsService],
    }).compile();

    service = module.get<ConversationsService>(ConversationsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('should create a conversation', () => {
    const participants: User[] = [
      { id: '1', username: 'user1', email: 'user1@example.com', password: 'test' },
      { id: '2', username: 'user2', email: 'user2@example.com', password: 'test' }
    ];
    const conversation = service.create(participants);
    expect(conversation).toBeDefined();
    expect(conversation.participants).toEqual(participants);
    expect(service.findByUser('1')).toContainEqual(conversation);
    expect(service.findByUser('2')).toContainEqual(conversation);
  });

  it('should find a conversation by ID', () => {
    const participants: User[] = [
      { id: '1', username: 'user1', email: 'user1@example.com', password:'test' },
      { id: '2', username: 'user2', email: 'user2@example.com', password:'test' }
    ];
    const createdConversation = service.create(participants);
    const foundConversation = service.findOne(createdConversation.id);
    expect(foundConversation).toEqual(createdConversation);
  });

  it('should return null if conversation not found', () => {
    const foundConversation = service.findOne('nonexistent');
    expect(foundConversation).toBeNull();
  });

  it('should find conversations by user ID', () => {
    const user1: User = { id: '1', username: 'user1', email: 'user1@example.com', password: 'test' };
    const user2: User = { id: '2', username: 'user2', email: 'user2@example.com',password: 'test' };
    const user3: User = { id: '3', username: 'user3', email: 'user3@example.com', password: 'test'  };

    const conversation1 = service.create([user1, user2]);
    const conversation2 = service.create([user1, user3]);

    const user1Conversations = service.findByUser('1');
    const user2Conversations = service.findByUser('2');
    const user3Conversations = service.findByUser('3');

    expect(user1Conversations).toEqual([conversation1, conversation2]);
    expect(user2Conversations).toEqual([conversation1]);
    expect(user3Conversations).toEqual([conversation2]);
  });
});