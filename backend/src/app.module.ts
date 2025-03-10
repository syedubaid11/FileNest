import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { FilesModule } from './files/files.module';
import { UsersModule } from './users/users.module';
import { AdminModule } from './admin/admin.module';
import { DrizzleModule } from './drizzle.module';
import { DatabaseModule } from './database.module';
// import { RedisService } from './redis.service';

@Module({
  imports: [FilesModule, UsersModule, AdminModule , DrizzleModule , DatabaseModule],
  controllers: [AppController],
  providers: [AppService],//[RedisService]
})
export class AppModule {}
