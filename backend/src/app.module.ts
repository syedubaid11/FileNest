import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { DrizzleModule } from './drizzle.module';
import { DatabaseModule } from './database.module';
// import { RedisService } from './redis.service';
import { FriendsModule } from './friends/friends.module';

@Module({
<<<<<<< HEAD
  imports: [FilesModule, UsersModule, AdminModule , DrizzleModule , DatabaseModule, FriendsModule],
=======
  imports: [UsersModule,DrizzleModule , DatabaseModule, FriendsModule, UploadModule],
>>>>>>> 6f86d19580e43e782c34009322de0cfdb1f2ad81
  controllers: [AppController],
  providers: [AppService],//[RedisService]
})
export class AppModule {}
