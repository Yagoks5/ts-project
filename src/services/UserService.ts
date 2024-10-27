import { UserRepository } from "../repositories/UserRepository";
import { User } from "../models/User";

export class UserService {
  constructor(private userRepository: UserRepository) {}

  createUser(name: string, email: string): User {
    const newUser: User = { id: Date.now(), name, email };
    return this.userRepository.createUser(newUser);
  }
  getUserById(id: number): User | undefined {
    return this.userRepository.findUserById(id);
  }
}
