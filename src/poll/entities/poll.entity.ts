
 import { User } from "src/users/entities/user.entity";
 import { Column, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { PollOptions } from "../pollOptions.entity";
 
 @Entity()
 export class Poll {
 
    @PrimaryGeneratedColumn()
     id: number;
 
     @Column('text')
     name: string;
 
     @ManyToOne(() => User, users => users.poll)
     @JoinColumn()
     users: Promise<User>

     @OneToMany(() => PollOptions, pollOptions => pollOptions.poll  )
     pollOptions: Promise<PollOptions[]>
 }


