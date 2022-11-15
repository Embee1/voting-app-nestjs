import { Module } from '@nestjs/common';
import { PollService } from './poll.service';
import { PollController } from './poll.controller';
import { UsersModule } from 'src/users/users.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from 'src/users/entities/user.entity';
import { Poll } from './entities/poll.entity';

@Module({
  imports: [UsersModule, TypeOrmModule.forFeature([User, Poll])],
  controllers: [PollController],
  providers: [PollService]
})
export class PollModule {}
