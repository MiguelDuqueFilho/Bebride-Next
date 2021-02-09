import {
  BeforeInsert,
  Column,
  CreateDateColumn,
  Entity,
  Index,
  PrimaryGeneratedColumn,
  UpdateDateColumn
} from 'typeorm';

// import { v4 } from 'uuid';

export const ALLOWED_ROLES = {
  ADMIN: 'ADMIN',
  CLIENT: 'CLIENT',
  PARTNER: 'PARTNER',
  VISITOR: 'VISITOR'
};

@Entity('users')
export class User {
  @PrimaryGeneratedColumn('uuid')
  public id!: number;

  @Column({ type: 'varchar', nullable: true })
  public name!: string | null;

  @Index({ unique: true })
  @Column({ type: 'varchar', nullable: true })
  public email!: string | null;

  @Column({ type: 'timestamp', nullable: true })
  public email_verified!: Date | null;

  @Column({ type: 'varchar', nullable: true })
  public image!: string | null;

  @Column({ type: 'varchar', nullable: true })
  public phone!: string | null;

  @Column({ type: 'varchar', nullable: true })
  public password_hash!: string | null;

  @Column({
    type: 'enum',
    enum: Object.values(ALLOWED_ROLES),
    default: ALLOWED_ROLES.VISITOR
  })
  public role!: string;

  @CreateDateColumn()
  public createdAt!: Date;

  @UpdateDateColumn()
  public updatedAt!: Date;

  // async hashPassword() {
  //   this.password = await bcrypt.hash(this.password, 10);
  // }
  // await queryRunner.query(`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`);
}
