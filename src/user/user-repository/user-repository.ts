import { Inject, Injectable } from "@nestjs/common";
import { Connection } from "../connection/connection";
import { PrismaService } from "prisma/prisma.service";
import { User } from "generated/prisma/client";
import { Logger } from 'winston';
import { WINSTON_MODULE_PROVIDER } from "nest-winston";

@Injectable()
export class UserRepository {
  // connection: Connection;

  // save() {
  //   console.info(`save uset with connection ${this.connection.getName()}`);
  // }

  constructor(
    private prismaService: PrismaService,
    @Inject(WINSTON_MODULE_PROVIDER) private logger: Logger
  ) {
    // 
    this.logger.info('Create user repository');
  }

  save(firstName: string, lastName?: string): Promise<User> {
    this.logger.info(
      `create user with firstname ${firstName} lastName ${lastName}`
    )
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
