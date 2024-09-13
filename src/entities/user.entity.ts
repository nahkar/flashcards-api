import { Field, ID, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class User {
	@Field(() => ID)
	user_id: string;
	@Field()
	first_name: string;
	@Field()
	last_name: string;
	@Field({ nullable: true })
	age?: number;
	@Field()
	email: string;
}
