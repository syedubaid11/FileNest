import { Injectable } from '@nestjs/common';
import { createClient } from '@supabase/supabase-js';
require ('dotenv').config();

@Injectable()
export class FilesUploadService {
    private supabase = createClient(
        process.env.SUPABASE_URL as string,
        process.env.SUPABASE_KEY as string
    ); 
    handlesupabase(){
        if(this.supabase){
            return 'supabase is connected'

        }
        else {
            return 'supabase not connected'
        }
    }
    

    handleFileUpload(file:Express.Multer.File): string {
        return `File uploaded successfully,`;
        //do error handling if file is not uploaded
    }
}
