import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { DatabaseModule } from 'src/database.module';

@Module({
  imports:[DatabaseModule],
  providers: [UsersService],
  controllers: [UsersController],
  
})
export class UsersModule {
  
}
