import UserProvider from '@/resources/user_provider';
import UserModel from '@/models/user';

interface IUserListController {
  fetchUsers(): Promise<any>;
}

class UserListViewModel {
  public users: UserModel[];

  constructor() {
    this.users = [];
  }
}

class UserListController implements IUserListController {
  public viewModel: UserListViewModel;
  private userService: UserProvider | any;

  constructor(component?: any, userProvider?: UserProvider | any) {
    this.userService = userProvider || new UserProvider(process.env.VUE_APP_API);
    this.viewModel = new UserListViewModel();
  }

  public async fetchUsers(): Promise<any> {
    this.viewModel.users = (await this.userService.getUsers()).map((user) => {
      return new UserModel(user);
    });
  }
}

export default UserListController;
