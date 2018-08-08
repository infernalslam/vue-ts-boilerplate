import UserProvider from '@/resources/user_provider';

interface IUserCreateController {
  init(): void;
  userCreate(data: string): void;
}

class UserCreateViewModel {
  public title: string;
  public createdUser: string;

  constructor() {
    this.title = '';
    this.createdUser = '';
  }
}

class UserCreateController implements IUserCreateController {
  public viewModel: UserCreateViewModel;
  private userService: UserProvider | any;

  constructor(component?: any, userProvider?: UserProvider | any) {
    this.userService = userProvider || new UserProvider(process.env.VUE_APP_API);
    this.viewModel = new UserCreateViewModel();
  }

  public init(): void {
    console.log('User Create Init');
  }

  public userCreate(data: string): void {
    this.viewModel.createdUser = data;
  }
}

export default UserCreateController;
