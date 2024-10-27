import { UserRepository } from "./repositories/UserRepository";
import { User } from "./models/User";
import { UserService } from "./services/UserService";

class SimpleUserRepository implements UserRepository {
  private users: User[] = [];

  createUser(user: User): User {
    this.users.push(user);
    return user;
  }

  findUserById(id: number): User | undefined {
    return this.users.find((user) => user.id === id);
  }
}

const userRepository = new SimpleUserRepository();
const userService = new UserService(userRepository);

const user = userService.createUser("Yago", "yago@email.com");
console.log("Usuário criado:", user);

const foundUser = userService.getUserById(user.id);
