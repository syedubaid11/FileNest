import { Injectable } from '@nestjs/common';
import * as dotenv from 'dotenv';
import {S3Client, PutObjectCommand} from "@aws-sdk/client-s3";
import { getSignedUrl } from "@aws-sdk/s3-request-presigner"


dotenv.config();
@Injectable()
export class UploadService {
    private s3:S3Client;

    //used a constructor to reduce the performace overhead as each user comes
    constructor(){ 
        this.s3=new S3Client({
            region:'auto',
            endpoint:process.env.R2_ENDPOINT,
            credentials: {
                accessKeyId: process.env.R2_ACCESS_ID!,
                secretAccessKey: process.env.R2_SECRET_ACCESS_KEY!,
            },

        })
    } 
    
    
  async getPresignedUrl(filename: string, fileType: string): Promise<string> {
    const command = new PutObjectCommand({
      Bucket: process.env.R2_BUCKET_NAME,
      Key: filename,
      ContentType: fileType,
    });

    return await getSignedUrl(this.s3, command, { expiresIn: 3600 }); 
  }
}

    

