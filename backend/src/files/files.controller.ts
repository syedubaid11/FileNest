// src/file/file.controller.ts
import { Controller, Post, UseInterceptors, UploadedFile, Get, Delete } from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { FilesUploadService } from './files.service';

@Controller('files')
export class FileController {
//constructor is need to import the service
constructor(private filesUploadService:FilesUploadService){}
  @Get('get')
  getTest(){
    // return this.filesUploadService.handlesupabase();
    return null
  }
  
  @Post('upload')
  @UseInterceptors(FileInterceptor('file'))
  uploadFile(@UploadedFile() file: Express.Multer.File) {
    return this.filesUploadService.handleFileUpload(file);
  }
 

  
}
