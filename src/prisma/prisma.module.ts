import { Global, Module } from '@nestjs/common';
import { PrismaService } from './prisma.service';

// @Global supaya PrismaService bisa di-inject di module mana pun
// tanpa harus import PrismaModule berulang kali
@Global()
@Module({
  providers: [PrismaService],
  exports: [PrismaService],
})
export class PrismaModule {}
