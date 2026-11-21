import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../prisma/prisma.service';
import { User } from '../../generated/prisma/client';

@Injectable()
export class UserService {
  constructor(private prisma: PrismaService) {}

  sayHello(name: string): string {
    return `Hello ${name}`
  }

  create(firstName: string, lastName: string): Promise<User> {
    return this.prisma.user.create({
      data: {
        first_name: firstName,
        last_name: lastName,
      },
    });
  }

  findAll(): Promise<User[]> {
    return this.prisma.user.findMany();
  }
}
