
import HttpRequest from './http_request';

interface IUserProvider {
  getUsers(): Promise<any>;
}

class UserProvider extends HttpRequest implements IUserProvider {
  constructor(url) {
    super(url);
  }
  public getUsers(): Promise<any> {
    return Promise.resolve([
      {
        firstName: 'Wisarut',
        lastName: 'Phuv',
        age: 18,
      },
      {
        firstName: 'Jack',
        lastName: 'Ma',
        age: 42,
      },
      {
        firstName: 'Steve',
        lastName: 'Jobs',
        userName: 'apple007',
      },
      {
        firstName: 'Nati',
        age: 33,
        role: 'Manager',
      },
    ]);
  }
}

export default UserProvider;
