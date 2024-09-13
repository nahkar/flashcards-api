import { BadGatewayException, Injectable } from '@nestjs/common';

import { CardRepository } from './card.repository';

@Injectable()
export class CardService {
	constructor(private readonly cardRepository: CardRepository) {}

	async find(userId: string) {
		try {
			const raw = await this.cardRepository.find(userId);
			return raw;
		} catch (error) {
			throw new BadGatewayException(error.message);
		}
	}
}
