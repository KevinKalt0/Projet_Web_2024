import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { UsersService } from './users.service';
import { User } from './user';

@Resolver(() => User)
export class UsersResolver {
  constructor(private readonly usersService: UsersService) {}

  @Query(() => [User])
  users(): User[] {
    return this.usersService.findAll();
  }

  @Query(() => User)
  user(@Args('id') id: string): User {
    const user: User | null = this.usersService.findOne(id);
    if (!user) {
      throw new Error(`User with ID ${id} not found`);
    }
    return user;
  }

  @Mutation(() => User)
  createUser(
    @Args('username') username: string,
    @Args('email') email: string,
    @Args('email') password: string
  ): User {
    const user: User = { id: Date.now().toString(), username, email, password };
    return this.usersService.create(user);
  }
}