import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';

import { CreateUserArgs } from './dto/create-user.args';
import { UserRepository } from './user.repository';

@Injectable()
export class UserService {
	constructor(private readonly userRepository: UserRepository) {}

	async find() {
		try {
			const raw = await this.userRepository.find();
			return raw;
		} catch (error) {
			throw new BadRequestException(error.message);
		}
	}

	async findOne(user_id: string) {
		try {
			const raw = await this.userRepository.findOne(user_id);
			if (raw.length === 0) {
				throw new NotFoundException('User not found');
			} else {
				return raw[0];
			}
		} catch (error) {
			throw new BadRequestException(error.message);
		}
	}

	async findByEmail(email: string) {
		try {
			const raw = await this.userRepository.findByEmail(email);
			if (raw.length === 0) {
				throw new NotFoundException('User not found');
			} else {
				return raw[0];
			}
		} catch (error) {
			throw new BadRequestException(error.message);
		}
	}

	async createUser({ first_name, last_name, age, email }: CreateUserArgs) {
		try {
			const raw = await this.userRepository.createUser({ first_name, last_name, age, email });
			return raw;
		} catch (error) {
			throw new BadRequestException(error.message);
		}
	}
}
