import { Test, TestingModule } from '@nestjs/testing';
import { UsersService } from './users.service';
import { User } from './user';
import { beforeEach, describe, it } from 'node:test';

describe('UsersService', () => {
  let service: UsersService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [UsersService],
    }).compile();

    service = module.get<UsersService>(UsersService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('should create a user', () => {
    const user: User = { id: '1', username: 'test', email: 'test@example.com', password:'test' };
    const createdUser = service.create(user);
    expect(createdUser).toEqual(user);
    expect(service.findAll()).toContainEqual(user);
  });

  it('should find a user by ID', () => {
    const user: User = { id: '1', username: 'test', email: 'test@example.com', password:'test' };
    service.create(user);
    const foundUser = service.findOne('1');
    expect(foundUser).toEqual(user);
  });

  it('should return null if user not found', () => {
    const foundUser = service.findOne('nonexistent');
    expect(foundUser).toBeNull();
  });

  it('should return all users', () => {
    const user1: User = { id: '1', username: 'test1', email: 'test1@example.com', password:'test' };
    const user2: User = { id: '2', username: 'test2', email: 'test2@example.com', password:'test' };
    service.create(user1);
    service.create(user2);
    const users = service.findAll();
    expect(users).toEqual([user1, user2]);
  });
});