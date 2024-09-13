import { ArgsType, Field, ID } from '@nestjs/graphql';

@ArgsType()
export class CreateUserArgs {
	@Field()
	first_name: string;
	@Field()
	last_name: string;
	@Field({ nullable: true })
	age?: number;
	@Field()
	email: string;
}
