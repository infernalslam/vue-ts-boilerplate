import UserProvider from '@/resources/user_provider';
import UserModel from '@/classes/models/user';

interface IUserListController {
  users: UserModel[];
  fetchUsers(): void;
}

class UserListController implements IUserListController {
  public users: UserModel[] = [];
  private userService: UserProvider;
  constructor(component?: any, userProvider?: UserProvider) {
    this.userService = userProvider || new UserProvider(process.env.VUE_APP_API);
    this.users = [];
  }

  public async fetchUsers(): Promise<any> {
    this.users = (await this.userService.getUsers()).map((user) => {
      return new UserModel(user);
    });
  }
}

export default UserListController;
