import { User } from '../entities/user';

export abstract class IUserRepository {
  abstract create(user: User): Promise<User | null>;
  /*  abstract findByEmail(email: string): Promise<User | null>;
  abstract validateUser(email: string, password: string): Promise<User>;
  abstract generateToken(user: User): Promise<{ token: string }>; */
}
