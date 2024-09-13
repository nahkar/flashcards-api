import { Field, Float, ID, ObjectType } from '@nestjs/graphql';

import { User } from './user.entity';

@ObjectType()
export class Card {
	@Field(() => ID)
	card_id: string;
	@Field(() => String)
	word: string;
	@Field(() => String)
	translate: string;
	@Field(() => User)
	user: User;
}
