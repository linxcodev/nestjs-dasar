import { Module } from '@nestjs/common';
import { UserController } from './user/user.controller';
import { UserService } from './user/user.service';
import { Connection, createConnection, MongoDBConnection, MysqlConnection } from './connection/connection';
import { mailservice, MailService } from './mail/mail.service';
import { createUserRepository, UserRepository } from './user-repository/user-repository';
import { MemberService } from './member/member.service';
import { ConfigService } from '@nestjs/config';

@Module({
  controllers: [UserController],
  providers: [
    UserService,
    {
      provide: Connection, 
      // class provider
      // useClass: process.env.database == 'mysql' ? MysqlConnection : MongoDBConnection

      useFactory: createConnection,
      inject: [ConfigService]
    },
    {
      // value provider
      // memberikan value/object yang sudah jadi
      provide: MailService, 
      useValue: mailservice
    },
    {
      // alias provider
      // Menggunakan provider yang sudah ada
      provide: 'EmailService',
      useExisting: MailService
    },
    {
      // factory provider
      // bisa inject dari depedency lain
      // menggunakan function untuk membuatnya
      provide: UserRepository, 
      useFactory: createUserRepository,
      inject: [Connection]
    },
    MemberService
  ]
})
export class UsersModule { }
