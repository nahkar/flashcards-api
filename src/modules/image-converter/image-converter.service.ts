import { Injectable } from '@nestjs/common';

import * as sharp from 'sharp';

@Injectable()
export class ImageConverterService {
	async resizeImage(file: Buffer) {
		const thumb = await sharp(file)
			.resize(200, 300, {
				fit: 'cover',
			})
			.toBuffer();
		return thumb;
	}
}
