import { Connection } from "../connection/connection";

export class UserRepository {
  connection: Connection;

  save() {
    console.info(`save uset with connection ${this.connection.getName()}`);
  }
}

// factory provider
// contoh libary ini punya orang lain, mau diinject
export function createUserRepository(connection: Connection): UserRepository {
  const repository = new UserRepository();
  repository.connection = connection;
  return repository;
}
