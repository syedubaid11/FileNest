// src/file/file.controller.ts
import { Controller, Post, UseInterceptors, UploadedFile, Get } from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';

@Controller('files')
export class FileController {
  @Get('test')
  getTest(){
    return {message: 'Test route works'};
  }

  @Post('upload')
  @UseInterceptors(FileInterceptor('file'))
  uploadFile(@UploadedFile() file: Express.Multer.File) {
    // You can process the file here if needed
    return { message: 'File uploaded successfully', file };
  }
}
