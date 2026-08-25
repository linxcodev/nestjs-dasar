import { Injectable } from '@nestjs/common';


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