import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number

  @Column()
  nama_user: string

  @Column()
  email: string

  @Column()
  username: string

  @Column()
  password: string

  @CreateDateColumn()
  created_at: Date
  
  @CreateDateColumn()
  updated_at: Date
}
