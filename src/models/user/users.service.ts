import { Injectable } from '@nestjs/common';
import { User } from './user';

@Injectable()
export class UsersService {
  private users: User[] = [];

  findAll(): User[] {
    return this.users;
  }

  findOne(id: string): User | null {
    const user = this.users.find(user => user.id === id);
    return user || null;
  }

  create(user: User): User {
    this.users.push(user);
    return user;
  }
}