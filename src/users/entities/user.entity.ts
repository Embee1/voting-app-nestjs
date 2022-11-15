import { Poll } from "src/poll/entities/poll.entity";
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class User {
    @PrimaryGeneratedColumn()
    id: number;

    @Column('text')
    name: string;

   @Column({unique: true})
    email: string;

    @Column()
    password: string;

    @Column({default: false})
    confirmPassword: boolean;


    @OneToMany(() => Poll, poll => poll.users )
    poll: Promise<Poll[]>
}

