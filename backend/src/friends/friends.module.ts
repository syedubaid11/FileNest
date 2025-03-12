import { Module } from '@nestjs/common';
import { FriendsService } from './friends.service';
import { friendsController } from './friends.controller';
import { DatabaseModule } from 'src/database.module';
@Module({
    imports:[DatabaseModule],
    providers:[FriendsService],
    controllers:[friendsController]
    
})
export class FriendsModule {
}

