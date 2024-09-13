import { Module } from '@nestjs/common';

import { DrizzleModule } from '@modules/drizzle/drizzle.module';
import { UserModule } from '@modules/user/user.module';

import { CardRepository } from './card.repository';
import { CardResolver } from './card.resolver';
import { CardService } from './card.service';

@Module({
	imports: [DrizzleModule, UserModule],
	providers: [CardService, CardRepository, CardResolver],
})
export class CardModule {}
