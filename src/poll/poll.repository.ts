import { EntityRepository, Repository } from "typeorm";
import { Poll } from "./entities/poll.entity";
import { PollOptions } from "./pollOptions.entity";

@EntityRepository(Poll)
export class PollReposiory extends Repository<Poll>{}
     

@EntityRepository(PollOptions)
export class PollOptionsReposiory extends Repository<PollOptions>{}
