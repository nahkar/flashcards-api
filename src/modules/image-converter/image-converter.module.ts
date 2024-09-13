import { Module } from '@nestjs/common';

import { ImageConverterService } from './image-converter.service';

@Module({
	providers: [ImageConverterService],
	exports: [ImageConverterService],
})
export class ImageConverterModule {}
