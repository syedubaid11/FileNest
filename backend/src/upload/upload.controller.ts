import { Controller, Get, Query } from '@nestjs/common';
import { UploadService } from './upload.service';

@Controller('upload')
export class UploadController {
  constructor(private readonly uploadService: UploadService) {}

  @Get('presigned-url')
  async getPresignedUrl(@Query('filename') filename: string, @Query('fileType') fileType: string) {
    if(!filename || !fileType){
      throw new Error('File name and File Type required');
    }
    return {
      message:'Generating Presigned Url ........',
      presignedUrl: await this.uploadService.getPresignedUrl(filename, fileType),
    };
  }
}
