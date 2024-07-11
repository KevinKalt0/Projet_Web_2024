import { Test, TestingModule } from '@nestjs/testing';
import { MessageQueueService } from './message-queue.service';
import { BullModule } from '@nestjs/bull';
import { describe, beforeEach, it } from 'node:test';

describe('MessageQueueService', () => {
  let service: MessageQueueService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [
        BullModule.forRoot({
          redis: {
            host: 'localhost',
            port: 6379,
          },
        }),
        BullModule.registerQueue({
          name: 'message-queue',
        }),
      ],
      providers: [MessageQueueService],
    }).compile();

    service = module.get<MessageQueueService>(MessageQueueService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
