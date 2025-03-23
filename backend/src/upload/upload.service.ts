import { Injectable } from '@nestjs/common';
import * as dotenv from 'dotenv';
import {S3Client,} from "@aws-sdk/client-s3";


dotenv.config();

@Injectable()
export class UploadService {
    private s3:S3Client;

    //used a constructor to reduce the performace overhead as each user comes
    constructor(){ 
        this.s3=new S3Client({
            region:'auto',
            endpoint:process.env.R2_ENDPOINT

        })
    }



    
}
