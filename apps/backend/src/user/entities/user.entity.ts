import { Exclude } from "class-transformer";
import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn
} from "typeorm";

export enum UserRole {
  EMPLOYER = "employer",
  EMPLOYEE = "employee"
}

@Entity("users")
export class User {
  @PrimaryGeneratedColumn("uuid")
  user_id: string;

  @Column({ unique: true, length: 255 })
  email: string;

  @Column({ default: false })
  isEmailVerified: boolean;

  @Column()
  @Exclude()
  password: string;

  @Column({
    type: "enum",
    enum: UserRole,
    default: UserRole.EMPLOYEE
  })
  role: UserRole;

  @Column({ unique: true, length: 30, nullable: true })
  phone?: string;

  @Column({ default: true })
  isActive: boolean;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updateAt: Date;
}
