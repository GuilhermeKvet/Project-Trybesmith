import { Pool, RowDataPacket } from 'mysql2/promise';
import { User } from '../interfaces/Interfaces';

export default class LoginModel {
  public connection: Pool;

  constructor(connection: Pool) {
    this.connection = connection;
  }

  public async login(username: string, password: string) {
    const [[user]] = await this.connection.execute<RowDataPacket[]>(
      'SELECT * FROM Trybesmith.Users WHERE username = ? AND password = ?',
      [username, password],
    );
    return user as User;
  }
}