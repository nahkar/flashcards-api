import { Module } from '@nestjs/common';

import { DrizzleModule } from '@modules/drizzle/drizzle.module';

import { UserRepository } from './user.repository';
import { UserResolver } from './user.resolver';
import { UserService } from './user.service';

@Module({
	imports: [DrizzleModule],
	providers: [UserResolver, UserService, UserRepository],
	exports: [UserService],
})
export class UserModule {}
