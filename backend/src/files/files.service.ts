import { Injectable } from '@nestjs/common';


@Injectable()
export class FilesUploadService {
    handleFileUpload(file:Express.Multer.File): string {
        return `File uploaded successfully, ${file.path}`;
    }
}
