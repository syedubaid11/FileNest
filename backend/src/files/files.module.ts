import { Module } from '@nestjs/common';
import { FileController } from './files.controller';
import { MulterModule } from '@nestjs/platform-express';
import { diskStorage } from 'multer';
import { FilesUploadService } from './files.service';

@Module({
    imports: [
        MulterModule.register({
          storage: diskStorage({
            destination: './uploads',
            filename: (req, file, cb) => {
              const filename = `${Date.now()}-${file.originalname}`;
              cb(null, filename);
            },
          }),
        }),
      ],
  controllers: [FileController],
  providers:[FilesUploadService]
})
export class FilesModule {

}


