import { Injectable } from "@nestjs/common";
import { Connection } from "../connection/connection";
import { PrismaService } from "prisma/prisma.service";
import { User } from "generated/prisma/client";

@Injectable()
export class UserRepository {
  // connection: Connection;

  // save() {
  //   console.info(`save uset with connection ${this.connection.getName()}`);
  // }

  constructor(private prismaService: PrismaService) {
    console.log('Create user repository');
  }

  save(firstName: string, lastName?: string): Promise<User> {
    return this.prismaService.user.create({
      data:{
        first_name: firstName,
        last_name: lastName
      }
    })
  }
}

// factory provider
// contoh libary ini punya orang lain, mau diinject
// export function createUserRepository(connection: Connection): UserRepository {
//   const repository = new UserRepository();
//   repository.connection = connection;
//   return repository;
// }
