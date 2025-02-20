import { Injectable } from '@nestjs/common';
import { db } from 'src/db';
import { usersTable } from 'src/db/schema';


// @Injectable()
// export class UsersService {
    
//     async findByid(id: string) {
//         const user=await db.query.usersTable.findFirst({
//             where : eq(users.id,id),


//         })        

//         throw new Error('Method not implemented.');
//     }
// }
