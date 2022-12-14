import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './entities/user.entity';
import { PollReposiory } from 'src/poll/poll.repository';

@Module({
imports: [TypeOrmModule.forFeature([User, PollReposiory])],
  controllers: [UsersController],
  providers: [UsersService],
  exports: [TypeOrmModule.forFeature([User])],
})
export class UsersModule {}
