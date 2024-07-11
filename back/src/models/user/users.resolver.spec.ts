import { Test, TestingModule } from '@nestjs/testing';
import { UsersResolver } from './users.resolver';
import { UsersService } from './users.service';
import { beforeEach, describe, it } from 'node:test';

describe('UsersResolver', () => {
  let resolver: UsersResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [],
      providers: [UsersResolver, UsersService],
    }).compile();

    resolver = module.get<UsersResolver>(UsersResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
