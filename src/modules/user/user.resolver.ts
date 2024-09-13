import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';

import { User } from '@entities/user.entity';

import { CreateUserArgs } from './dto/create-user.args';
import { UserService } from './user.service';

@Resolver(() => User)
export class UserResolver {
	constructor(private userService: UserService) {}

	@Query(() => [User])
	users() {
		return this.userService.find();
	}

	@Query(() => User)
	user(@Args('user_id') user_id: string) {
		return this.userService.findOne(user_id);
	}

	@Mutation(() => User)
	createUser(@Args() args: CreateUserArgs) {
		return this.userService.createUser(args);
	}
}
