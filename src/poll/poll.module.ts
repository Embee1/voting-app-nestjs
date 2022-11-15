import { Module } from '@nestjs/common';
import { PollService } from './poll.service';
import { PollController } from './poll.controller';
import { UsersModule } from 'src/users/users.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from 'src/users/entities/user.entity';
import { Poll } from './entities/poll.entity';
import { PollOptionsReposiory, PollReposiory } from './poll.repository';

@Module({
  imports: [UsersModule, TypeOrmModule.forFeature([User, PollReposiory, PollOptionsReposiory])],
  controllers: [PollController],
  providers: [PollService]
})
export class PollModule {}
