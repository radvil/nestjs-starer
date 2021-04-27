import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { compare } from 'bcrypt';
import { IUserPayload } from 'src/interfaces';

/**
 *
 * @description Entity is like a Schema is mongoose
 * We can also use this to type any returned user
 *
 */
@Entity({ name: 'users' })
export class User extends BaseEntity {
	@PrimaryGeneratedColumn()
	id: number;

	@Column({ unique: true })
	email: string;

	@Column({ unique: true })
	username: string;

	@Column()
	displayName: string;

	@Column()
	password: string;

	@Column({
		name: 'isSuperUser',
		type: 'boolean',
		nullable: false,
		default: false,
	})
	isSuperUser: boolean;

	/**
	 *
	 * @param password plain password against database
	 * @desc validate password to match one in db
	 *
	 */
	async comparePassword(password: string): Promise<boolean> {
		return await compare(password, this.password);
	}

	/**
	 *
	 * @desc common use to generate jwt payload
	 * return serialized user as AuthUser | RequestUser
	 *
	 */
	public asPayload(): IUserPayload {
		return {
			id: this.id,
			username: this.username,
      isSuperUser: this.isSuperUser,
		};
	}

	get withoutPassword(): Omit<this, 'password'> {
		const { password, ...props } = this;
		return props;
	}

	public asAuthUser(): Omit<this, 'password'> {
		const { password, ...authUser } = this;
		return authUser;
	}

	constructor(newUser?: Partial<User>) {
		super();
		Object.assign(this, newUser);
	}
}
