import { Injectable } from '@nestjs/common';

@Injectable()
export class UsersService {
  findUserById(usermame: string) {
    return {
      id: 'gfgfg',
      name: 'Marco',
      username: 'Markiius',
      password: '12345',
      active: true,
    };
  }
}
