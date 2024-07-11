import { Injectable } from '@nestjs/common';
import { User } from './user.entity';

@Injectable()
export class UsersService {
  private users: User[] = [];

  async findByEmail(email: string): Promise<User | undefined> {
    return this.users.find(user => user.email === email);
  }

  async findById(id: string): Promise<User | undefined> {
    return this.users.find(user => user.id === id);
  }

  async create(user: Partial<User>): Promise<User> {
    const newUser = {
      ...user,
      id: Date.now().toString(),
    } as User;
    this.users.push(newUser);
    return newUser;
  }
}
