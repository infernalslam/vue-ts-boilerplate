import List from './list';

interface IUser {
  fullName(): string;
}

class User extends List implements IUser {
  public firstName: string;
  public lastName: string;
  public age?: number;
  public userName: string;
  public role: string;

  constructor(user) {
    super();
    this.firstName = user.firstName || '';
    this.lastName = user.lastName || '';
    this.age = user.age || '-';
    this.userName = user.userName || '';
    this.role = user.role || '';
  }

  public fullName(): string {
    return `${this.firstName} ${this.lastName}`;
  }
}

export default User;
