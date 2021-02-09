// import 'reflect-metadata';
import {
  AfterLoad,
  BeforeInsert,
  BeforeUpdate,
  Column,
  CreateDateColumn,
  Entity,
  Index,
  PrimaryGeneratedColumn,
  UpdateDateColumn
} from 'typeorm';

import bcrypt from 'bcryptjs';

export const ALLOWED_ROLES = {
  ADMIN: 'ADMIN',
  CLIENT: 'CLIENT',
  PARTNER: 'PARTNER',
  VISITOR: 'VISITOR'
};

@Entity()
export class UsersCredentials {
  @PrimaryGeneratedColumn('increment')
  public id!: number;

  @Column({ type: 'varchar', nullable: true })
  public name!: string | null;

  @Index({ unique: true })
  @Column({ type: 'varchar', nullable: false })
  public email!: string;

  @Column({ type: 'timestamp', nullable: true, default: null })
  public email_verified!: Date | null;

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

  private tempPassword: string;

  private password: string;

  @AfterLoad()
  private loadTempPassword(): void {
    this.tempPassword = this.password;
  }

  @BeforeInsert()
  @BeforeUpdate()
  async hashPassword(): Promise<void> {
    if (this.tempPassword !== this.password) {
      this.password_hash = await bcrypt.hash(this.password, 10);
    }
  }

  public async checkPassword(password: string): Promise<boolean> {
    return await bcrypt.compare(password, this.password_hash);
  }
}

export default UsersCredentials;
