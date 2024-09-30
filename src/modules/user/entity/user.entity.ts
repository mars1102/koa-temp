import { Entity, Column, PrimaryColumn } from "typeorm";
import { USER_STATUS } from "../user.enum";

@Entity()
export class User {
  @PrimaryColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  code: string;

  @Column()
  password: string;

  @Column({
    default: USER_STATUS.enabled,
  })
  status: number;
}
