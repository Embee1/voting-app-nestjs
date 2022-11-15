
 import { User } from "src/users/entities/user.entity";
 import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Poll } from "./entities/poll.entity";
 
 @Entity()
 export class PollOptions{
 
    @PrimaryGeneratedColumn()
     id: number;
 
     @Column('text')
     text: string;
 
     @Column('integer')
     votes: number;

     @ManyToOne(() => Poll, poll => poll.pollOptions)
     @JoinColumn()
     poll: Promise<Poll>; // generated a userId
 }