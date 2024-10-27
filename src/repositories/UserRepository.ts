import { User } from "../models/User";

export interface UserRepository {
  createUser(user: User): User;
  findUserById(id: number): User | undefined;
}
