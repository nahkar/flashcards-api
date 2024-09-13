import { Args, Parent, Query, ResolveField, Resolver } from '@nestjs/graphql';

import { Card } from '@entities/card.entity';
import { User } from '@entities/user.entity';

import { UserService } from '@modules/user/user.service';

import { CardService } from './card.service';

@Resolver(() => Card)
export class CardResolver {
	constructor(
		private readonly cardService: CardService,
		private readonly userService: UserService,
	) {}

	@Query(() => [Card])
	cards(@Args('userId') userId: string) {
		return this.cardService.find(userId);
	}
	@ResolveField()
	user(@Parent() user: User) {
		const { user_id } = user;
		return this.userService.findOne(user_id);
	}
}
