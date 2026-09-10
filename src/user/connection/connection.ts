import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';


export class Connection {
  getName(): string {
    return null;
  }
}

// class provider
@Injectable()
export class MysqlConnection extends Connection {
  getName(): string {
    return 'Mysql';
  }
}

@Injectable()
export class MongoDBConnection extends Connection {
  getName(): string {
    return 'MongoDB';
  }
}

export function createConnection(configService: ConfigService): Connection {
  if(configService.get('DATABASE') == 'mysql') {
    return new MysqlConnection();
  }

  return new MongoDBConnection();
}